import { useListTpYieldTypesQuery } from '../generated/graphql';
import { gql } from '@apollo/client/core';

gql`
  query listTpYieldTypes {
    practice_yield_type {
      name
    }
  }
`;

export const useFetchYieldTypes = () => {
  const { data: rawData, loading, error } = useListTpYieldTypesQuery();

  const data = rawData
    ? rawData.practice_yield_type.map(({ name }) => name)
    : [];

  return { data, rawData, loading, error };
};
