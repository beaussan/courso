import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import { Modal } from '../../../components/Modal';
import {
  Promotion,
  useInsertNewPracticeToPromotionMutation,
} from '../../../generated/graphql';
import { gql } from '@apollo/client/core';
import { Form, Formik, FormikHelpers } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { DateTimeInputRangeField } from '../../../components/DateTimeInput';
import { DropList } from '../../../components/DropList';
import {
  addDays,
  addHours,
  formatDuration,
  formatRFC3339,
  intervalToDuration,
  set,
} from 'date-fns';
import * as yup from 'yup';

type promoItem = Pick<Promotion, 'id' | 'name' | 'years'>;

export interface NewTpToPromoProps {
  promotions: promoItem[];
  tpId: string;
}

gql`
  mutation insertNewPracticeToPromotion(
    $close_date: timestamptz!
    $open_date: timestamptz!
    $practice_id: uuid!
    $promotion_id: uuid!
  ) {
    insert_practice_to_promotion(
      objects: {
        can_student_see_feedback: false
        can_student_see_grade: false
        close_date: $close_date
        open_date: $open_date
        practice_id: $practice_id
        promotion_id: $promotion_id
      }
    ) {
      returning {
        id
      }
    }
  }
`;

interface NewTpToPromoForm {
  promotion: promoItem;
  start: Date;
  end: Date;
}

const getInitDate = (): Date =>
  addHours(
    set(new Date(), {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
    }),
    1,
  );

export const NewTpToPromo: React.FC<NewTpToPromoProps> = ({
  promotions,
  tpId,
}) => {
  const [insertNewTpToPromo] = useInsertNewPracticeToPromotionMutation();
  const [isModalOpen, setModalOpen] = useState(false);
  const { addToast } = useToasts();
  const onCloseModal = () => setModalOpen(false);

  const onSubmit = async (
    values: NewTpToPromoForm,
    formikHelpers: FormikHelpers<NewTpToPromoForm>,
  ) => {
    try {
      formikHelpers.setSubmitting(true);
      await insertNewTpToPromo({
        variables: {
          promotion_id: values.promotion.id,
          practice_id: tpId,
          close_date: formatRFC3339(values.end),
          open_date: formatRFC3339(values.start),
        },
      });
      setModalOpen(false);
      addToast('Practice successfully linked to promotion', {
        appearance: 'success',
      });
    } catch (e) {
      console.error(e);
      addToast('An error occured, please try again latter', {
        appearance: 'error',
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        disabled={promotions.length === 0}
      >
        Add new
      </Button>

      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <Formik
          initialValues={{
            end: addDays(getInitDate(), 1),
            start: getInitDate(),
            promotion: promotions[0],
          }}
          validationSchema={yup.object().shape({
            promotion: yup.object().required(),
            start: yup.date().required().min(new Date()),
            end: yup.date().required(),
          })}
          onSubmit={onSubmit}
        >
          {({ isValid, isSubmitting, isValidating, values }) => {
            const interval = formatDuration(
              intervalToDuration({
                start: values.start,
                end: values.end,
              }),
            );
            return (
              <Form>
                <Modal.Body icon="add" onClose={onCloseModal}>
                  <div>
                    <Modal.Title>New promotion for TP</Modal.Title>
                    <div className=" mt-4 mb-2">
                      <DropList
                        label="Promotion to link"
                        name="promotion"
                        values={promotions}
                        itemToString={(it) => `${it?.name} - ${it?.years}`}
                      />
                    </div>
                    <div className="">
                      <DateTimeInputRangeField
                        labelEnd="End of delivery"
                        nameEnd="end"
                        labelStart="Open date"
                        nameStart="start"
                      />
                    </div>
                    {interval && (
                      <div>
                        For the handout, the student will have a{' '}
                        <span className="font-semibold">{interval}</span>{' '}
                        window.
                      </div>
                    )}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Modal.ButtonWrapper>
                    <Button
                      variant="ghost"
                      type="button"
                      isFull={true}
                      onClick={onCloseModal}
                    >
                      Cancel
                    </Button>
                  </Modal.ButtonWrapper>
                  {isSubmitting}
                  <Modal.ButtonWrapper>
                    <Button
                      type="submit"
                      variant="primary"
                      isFull={true}
                      disabled={(!isValid || isValidating) && !isSubmitting}
                    >
                      Create
                    </Button>
                  </Modal.ButtonWrapper>
                </Modal.Footer>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
