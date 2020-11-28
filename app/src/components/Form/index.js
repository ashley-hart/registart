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
import { FaBars } from "react-icons/fa";

const Form = () => {
  // Note: can add 'errors' to this object
  const { register, handleSubmit } = useForm();

  // Add form input to the database.
  const onSubmit = (data) => {
    const appointment = {
      name: data.name,
      email: data.email,
      date: data.date,
      time: data.time,
      apptType: data.apptType,
      notes: data.notes,
      code: generateRetCode(data),
    };

    console.log("Posting: " + JSON.stringify(appointment));
    axios
      .post("http://localhost:5000/editor/add", appointment)
      .then((res) => console.log(res.data)); // promise

    alert(
      "IMPORTANT: Write down your retrieval code in case you want to make changes!\n" +
        appointment.code
    );

    window.location.reload();
  };

  // Generates a retreival code and writes it to the code log.
  const generateRetCode = (data) => {
    var code =
      data.name.substring(0, 1) +
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
