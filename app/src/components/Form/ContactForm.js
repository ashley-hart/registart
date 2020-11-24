import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  FormWrapper,
  FormContainer,
  NotesFeild,
  SubmitButton,
  TextFeild,
  Label,
} from "./FormElements";

function ContactForm() {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const cinfo = {
      name: data.name,
      email: data.email,
      notes: data.notes,
    };

    axios
      .post("http://localhost:5000/contact/add", cinfo)
      .then((res) => console.log(res.data)); // promise
  };

  return (
    <>
      <FormWrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="name">Name</Label>
          <TextFeild
            type="text"
            name="name"
            ref={register({ required: true })}
          />

          <Label htmlFor="email">E-mail</Label>
          <TextFeild
            type="text"
            name="email"
            ref={register({ required: true })}
          />

          <Label htmlFor="notes">Notes</Label>
          <NotesFeild
            type="input"
            name="notes"
            ref={register({ required: true })}
          />

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      </FormWrapper>
    </>
  );
}

export default ContactForm;
