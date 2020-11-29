import React from "react";
import { Page, PageContainer, Title } from "./PageComponents.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  FormWrapper,
  FormContainer,
  SubmitButton,
  TextFeild,
  H2,
  Label,
} from "../components/Form/FormElements";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    const user = {
      username: data.username,
      password: data.password,
    };

    let token = "";

    await axios
      .post("http://localhost:5000/signin/login", user)
      .then((res) => {
        console.log(res.data);
        token = res.data.token;
      }); // promise

      console.log("Got token: " + token);
      localStorage.setItem("auth-token", token);
    window.location = "http://localhost:3000/editor/"
    };

  return (
    <Page>
      <PageContainer>
        <Title>Are you the site administator?</Title>
        <H2>If so, log in!</H2>
        <FormWrapper>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="date">Username</Label>
            <TextFeild
              type="text"
              name="username"
              ref={register({ required: true })}
            />
            <Label htmlFor="date">Password</Label>
            <TextFeild
              type="password"
              name="password"
              ref={register({ required: true })}
            />
            <SubmitButton type="submit">Login</SubmitButton>
          </FormContainer>
        </FormWrapper>
      </PageContainer>
    </Page>
  );
};

export default SignIn;
