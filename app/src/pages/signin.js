import React from "react";
import { P, Page, PageContainer, Title } from "./PageComponents.js";
import { useForm } from "react-hook-form";
import {
  FormWrapper,
  FormContainer,
  NotesFeild,
  SubmitButton,
  TextFeild,
  H2,
  Label,
} from "../components/Form/FormElements";

const SignIn = () => {
  
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    <>
      <Page>
        <PageContainer>
            <Title>Are you the site administator?</Title>
          <FormWrapper>
            <H2>If so, log in!</H2>
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
    </>
  );
}

export default SignIn;
