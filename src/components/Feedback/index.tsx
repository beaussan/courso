import React from 'react';
import { Button } from '../Button';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { FeedbackFish } from '@feedback-fish/react';

export const Feedback = () => {
  const { user } = useCurrentUser();
  return (
    <FeedbackFish projectId="40bf40541aac9c" userId={user?.email}>
      <Button>Send feedback</Button>
    </FeedbackFish>
  );
};
