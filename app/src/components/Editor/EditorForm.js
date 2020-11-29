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
} from "./EditorElements";

const EditForm = (props) => {
  const { register, handleSubmit } = useForm();
  // Props takes in the id of the previous appointment.

  console.log(props.appt);
  console.log("id recieved! " + props.appt._id);
  // Add form input to the database.
  const onSubmit = (data) => {
    // Take new appointment data and prepare it to be sent to the DB.
    const appointment = {
      name: data.name,
      email: data.email,
      date: data.date,
      time: data.time,
      apptType: data.apptType,
      notes: data.notes,
      code: props.appt.retCode,
    };

    // Update entry in the database.
    console.log("Posting: " + JSON.stringify(appointment));
    console.log("http://localhost:5000/update/" + props.appt._id);

    axios
      .post(("http://localhost:5000/editor/update/" + props.appt._id), appointment)
      .then((res) => console.log(res.data));

    alert(
      "IMPORTANT: Write down your retrieval code in case you want to make changes!\n" +
        appointment.code
    );

    // window.location.reload();
  };

  return (
    <>
      <H2>Enter Your Updated Information!</H2>
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

export default EditForm;
