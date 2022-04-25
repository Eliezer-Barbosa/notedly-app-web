import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation, useApolloClient, gql } from "@apollo/client";

import Button from "../components/Button";

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

// include the props passed to the component for later use
const SignUp = (props) => {
  // set the default state of the form
  const [values, setValues] = useState();

  // update the state when a user types in the form
  const onChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    document.title = "Sign up - Notedly";
  });

  const [signUp] = useMutation(SIGNUP_USER, {
    onCompleted: ({ signUp }) => {
      console.log(signUp);
      // store the JWT in localStorage
      localStorage.setItem("token", signUp);
    },
  });

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          signUp({ variables: { ...values } });
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={onChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
