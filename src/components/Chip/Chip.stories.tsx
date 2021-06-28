import React from 'react';
import { Meta } from '@storybook/react';
import { Chip } from '@/components/Chip/index';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

export const Showcase = () => {
  return (
    <div className="grid gap-4">
      <Chip variant="success">Success chip</Chip>
      <Chip variant="error">Error chip</Chip>
    </div>
  );
};
