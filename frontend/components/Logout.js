import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION{
    signout {
      message
    }
  }
`;

const Logout = props => {
  return (
      <Mutation mutation={SIGNOUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY}]}>
        {(signout) => {
          return props.children({...props, signout: signout});
        }}
      </Mutation>
  );
};

export default Logout;