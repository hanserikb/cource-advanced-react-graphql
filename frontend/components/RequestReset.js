import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import Input from './Input';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class Signin extends Component {
  state = {
    email: '',
    done: false,
  };

  changeProp = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { done, email } = this.state;
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(requestReset, { error, loading }) => (
          <Form
            method="POST"
            onSubmit={async e => {
              e.preventDefault();
              await requestReset();
              this.setState({
                email: '',
                done: true,
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Reset password</h2>
              <Error error={error} />
              <Input
                disabled={done}
                id="requestresetemail"
                title="Email"
                propName="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={this.changeProp}
              />
              {done ? <p>Check your email!</p> : null}
              <input disabled={done} type="submit" value="Reset" />
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signin;
