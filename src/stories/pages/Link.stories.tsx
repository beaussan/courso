import {
  signInStudentState,
  signInUserGql,
  signOutState,
  signOutUserGql,
} from '@/stories/decorators';
import LinkPage from '@/pages/link/[linkId]';
import { Meta, Story } from '@storybook/react';
import { graphql } from 'msw';
import { HTTP_URL } from '@/services/urqlClient';

export default {
  component: LinkPage,
  title: 'Pages/LinkId',
  parameters: {
    layout: 'fullscreen',
    nextRouter: {
      path: '/[linkId]',
      asPath: '/link/396e93c9-fda2-41d3-b7e1-a22cbe468238',
      query: {
        linkId: '396e93c9-fda2-41d3-b7e1-a22cbe468238',
      },
    },
  },
} as Meta;

const Template: Story = () => <LinkPage />;

export const WhenSignOut = Template.bind({});

const gqlEndpoint = graphql.link(HTTP_URL);

WhenSignOut.decorators = [signOutState];
WhenSignOut.parameters = {
  msw: [signOutUserGql({ gql: gqlEndpoint })],
};

export const WhenSignIn = Template.bind({});

WhenSignIn.decorators = [signInStudentState];
WhenSignIn.parameters = {
  msw: [signInUserGql({ gql: gqlEndpoint })],
};
