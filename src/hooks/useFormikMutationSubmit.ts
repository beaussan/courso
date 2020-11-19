import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { FormikHelpers } from 'formik';
import { OperationContext, OperationResult } from '@urql/core';

export function useFormikMutationSubmit<TFormData, TData, TVariables>({
  mutation,
  extraParamsMutation = {},
  mapFormData,
  navigateDestination = '../',
  successMessage,
}: {
  mutation: (
    variables?: TVariables,
    context?: Partial<OperationContext>,
  ) => Promise<OperationResult<TData, TVariables>>;
  extraParamsMutation?: Partial<OperationContext>;
  mapFormData: (values: TFormData) => Promise<TVariables> | TVariables;
  navigateDestination?: string | null;
  successMessage: string;
}) {
  const navigate = useNavigate();
  const { addToast } = useToasts();

  return async (values: TFormData, formikHelpers: FormikHelpers<TFormData>) => {
    try {
      formikHelpers.setSubmitting(true);
      const dataForMutation = await mapFormData(values);
      const { error } = await mutation(dataForMutation, extraParamsMutation);
      if (error) {
        throw error;
      }
      addToast(successMessage, {
        appearance: 'success',
      });
      if (navigateDestination) {
        navigate(navigateDestination);
      }
    } catch (e) {
      console.error(e);
      addToast('An error occured, please try again latter', {
        appearance: 'error',
      });
    }
  };
}
