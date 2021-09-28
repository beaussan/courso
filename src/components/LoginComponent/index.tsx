import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { Loader } from '@/components/Loader';
import { LoadingFullScreen } from '@/layouts/LoadingFullScreen';
import { Logo } from '@/components/Logo';
import { useAuthContext } from '@/hooks/useAuthContext';

const buttonClass =
  'w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring-blue transition duration-150 ease-in-out';

const SocialButton: React.FC<{ label: string; onClick: any }> = ({
  children,
  label,
  onClick,
}) => {
  return (
    <div>
      <span className="w-full inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className={buttonClass}
          aria-label={label}
          onClick={onClick}
        >
          {children}
        </button>
      </span>
    </div>
  );
};

type LoginCmpTypes = {
  hero: string;
};
export const LoginComponent: React.FC<LoginCmpTypes> = ({ hero }) => {
  const { authStatus } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [hasInitialLoading, setHasInitialLoading] = useState(false);

  useEffect(() => {
    if (!hasInitialLoading) {
      if (authStatus === 'out' || authStatus === 'in') {
        setHasInitialLoading(true);
      }
    }
  }, [authStatus, hasInitialLoading]);

  const showSmallLoader =
    loading || (authStatus === 'loading' && hasInitialLoading);

  if ((authStatus === 'loading' || !authStatus) && !hasInitialLoading) {
    return <LoadingFullScreen debugName="Login component" />;
  }

  const loginWithGoogle = async () =>
    login(new firebase.auth.GoogleAuthProvider());

  const loginWithGithub = async () =>
    login(new firebase.auth.GithubAuthProvider());

  const login = async (provider: firebase.auth.AuthProvider) => {
    setLoading(true);
    try {
      await firebase.auth().signInWithPopup(provider);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="mx-auto h-16 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {hero}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <div className="flex flex-col items-start content-center justify-center">
              <div>We only support loggin with github and google for now.</div>
              <div>We only get your name and email, no extra data.</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 bg-white text-gray-500">
                  Sign in with
                </span>
              </div>
            </div>
            {showSmallLoader ? (
              <Loader />
            ) : (
              <>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <SocialButton
                    label={'Sign in with Google'}
                    onClick={loginWithGoogle}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                  </SocialButton>
                  <SocialButton
                    label={'Sign in with GitHub'}
                    onClick={loginWithGithub}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </SocialButton>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
