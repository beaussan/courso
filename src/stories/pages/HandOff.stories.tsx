import React from 'react';
import { Meta, Story } from '@storybook/react';
import HandOffIndexPage from '@/pages/HandOff/list/index';
import { graphql } from 'msw';
import { HTTP_URL } from '@/services/urqlClient';
import {
  HandoffListQuery,
  HandoffListQueryVariables,
} from '@/generated/graphql';

export default {
  component: HandOffIndexPage,
  title: 'Pages/HandOffList',
} as Meta;

const gqlEndpoint = graphql.link(HTTP_URL);

const Template: Story = () => <HandOffIndexPage />;

export const EmptyList = Template.bind({});

EmptyList.parameters = {
  msw: [
    gqlEndpoint.query<HandoffListQuery, HandoffListQueryVariables>(
      'handoffList',
      (req, res, ctx) => {
        return res(ctx.data({ course: [] }));
      },
    ),
  ],
};

export const AllFinished = Template.bind({});

AllFinished.parameters = {
  msw: [
    gqlEndpoint.query<HandoffListQuery, HandoffListQueryVariables>(
      'handoffList',
      (req, res, ctx) => {
        return res(
          ctx.data({
            course: [
              {
                id: 'a0846b30-ebc6-4210-8a74-5f37ffafaf8f',
                name: 'Mock course',
                years: '2021-2022',
                practice_to_courses: [],
              },
            ],
          }),
        );
      },
    ),
  ],
};
