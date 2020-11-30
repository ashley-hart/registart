import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  FormWrapper,
  FormContainer,
  NotesFeild,
  SubmitButton,
  TextFeild,
  H2,
  Label,
} from "./FormElements";

const Form = () => {
  // Note: can add 'errors' to this object
  const { register, handleSubmit } = useForm();

  // Add form input to the database.
  const onSubmit = (data) => {
    const appointment = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      date: data.date,
      time: data.time,
      phoneNumber: data.phoneNumber,
      apptType: data.apptType,
      notes: data.notes,
      retCode: generateRetCode(data),
    };

    console.log("Posting: " + JSON.stringify(appointment));
    axios
      .post("http://localhost:5000/editor/add", appointment)
      .then((res) => console.log(res.data)); // promise

    alert(
      "IMPORTANT: Write down your retrieval code in case you want to make changes!\n" +
        appointment.retCode
    );

    window.location.reload();
  };

  // Generates a retreival code and writes it to the code log.
  const generateRetCode = (data) => {
    var code =
      data.firstName.substring(0, 1) +
      data.email.substring(0, 4) +
      data.date.substring(5, 9);
    var num = Math.floor(Math.random() * 100 + 1);

    code += num.toString();
    console.log("Ret Code Generated: " + code);
    return code;
  };

  return (
    <>
        <H2>Set an Appointment</H2>
        <FormWrapper>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="firstName">First Name</Label>
          <TextFeild
            type="text"
            name="firstName"
            ref={register({ required: true })}
          />

          <Label htmlFor="lastName">Last Name</Label>
          <TextFeild
            type="text"
            name="lastName"
            ref={register({ required: true })}
          />

            <Label htmlFor="email">E-mail</Label>
            <TextFeild
              type="text"
              name="email"
              ref={register({ required: true })}
            />

            <Label htmlFor="date">Date</Label>
            <TextFeild
              type="date"
              name="date"
              ref={register({ required: true })}
            />

            <Label htmlFor="time">Time</Label>
            <TextFeild
              type="time"
              name="time"
              step="3600"
              min="9:00"
              max="18:00"
              ref={register({ required: true })}
            />

            <Label htmlFor="phoneNumber">Phone Number</Label>
            <TextFeild
              type="tel"
              name="phoneNumber"
              defaultValue="000-000-0000"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={register({ required: true })}
            />

            <Label htmlFor="apptType">Appointment Type</Label>
            <TextFeild
              type="text"
              name="apptType"
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
};

export default Form;
