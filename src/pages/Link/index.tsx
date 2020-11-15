import { useAuthState } from '../../hooks/useAuthState';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import React from 'react';
import { LoginComponent } from '../../components/LoginComponent';
import gql from 'graphql-tag';
import { useLinkStudentToUserMutation } from '../../generated/graphql';
import { Loader } from '../../components/Loader';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { auth } from '../../services/firebase';
import { useToasts } from 'react-toast-notifications';
import { Logo } from '../../components/Logo';

gql`
  mutation linkStudentToUser($linkId: uuid!) {
    linkStudentToUser(linkId: $linkId) {
      ok
    }
  }
`;

const LINK_ERRORS = {
  userAlreadyLinked: 'User is already linked to a student',
  linkNotFound: 'Link not found',
};

const LinkPage = () => {
  const { linkId } = useParams();
  const { user } = useCurrentUser();
  const authState = useAuthState();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [
    { fetching, data, error },
    linkStudentToUser,
  ] = useLinkStudentToUserMutation();

  const logout = async () => {
    await auth.signOut();
  };

  if (authState !== 'in') {
    return <LoginComponent hero={'Login in order to link your profile'} />;
  }

  if (data || error?.message === LINK_ERRORS.userAlreadyLinked) {
    addToast('Account successfully linked !', {
      appearance: 'success',
    });
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="mx-auto h-16 w-auto" />
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center font-bold text-xl mb-8 ">
            Almost there ! Link your account
          </div>
          <Loader visible={fetching}>
            <Button
              onClick={() =>
                linkStudentToUser({
                  linkId,
                })
              }
            >
              Link your account
            </Button>
            {error && <div>En error occured, please try again</div>}
            <div className="flex flex-col justify-center items-center mt-8 ">
              <div className="mt-4">You are linking using the account</div>
              <div>{user?.email}</div>
              <div className="mt-4">
                Not you ?{' '}
                <Button variant="ghost" onClick={logout}>
                  Logout
                </Button>
              </div>
            </div>
          </Loader>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
