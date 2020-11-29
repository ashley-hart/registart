import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Page, PageContainer, P, Title } from "./PageComponents.js";
import {
  TextFeild,
  H2,
  Label,
  FormWrapper,
  FormContainer,
  SubmitButton,
} from "../components/Form/FormElements";
import {
  CardDiv,
  Info,
  ButtonDiv,
  DeleteButton,
  AcceptButton,
  List,
  ListContainer,
} from "../components/Editor/EditorElements";
import "../components/Editor/Appointment";
import { FaTimes, FaPen } from "react-icons/fa";
import EditForm from "../components/Editor/EditorForm";

const RetCode = () => {
  const { register, handleSubmit } = useForm();

  function numProps(obj) {
    var c = 0;
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) ++c;
    }
    return c;
  }

  const fetchData = async () => {
    let response = await axios.get("http://localhost:5000/editor/");
    console.log(response.data);
    return response.data;
  };

  const deleteAppointment = (target) => {
    const id = target._id;
    console.log("Delete appointment recieved: ");
    console.log(id);

    if (window.confirm("Do you want to delete this appointment?") === true) {
      axios
        .delete("http://localhost:5000/editor/" + id)
        .then((res) => console.log(res.data));
      window.location.reload();
    } else {
      console.log("Opted out of deleting appointment.");
    }
  };

  // Idea: Render in a form that will take in new data and change what is present on the screen.
  const updateAppointment = (target) => {
    console.log("updateAppointment received:");
    console.log(target);

    if (window.confirm("Do you want to update this appointment?") === true) {
      console.log("Updating appointment entry!");

      // Pass the entire appointment to the editor form.
      ReactDOM.render(
        <EditForm appt={target} />,
        document.getElementById("formSpace")
      );
    } else {
      console.log("Opted out of updating appointment.");
    }
  };

  const onSubmit = async (data) => {
    console.log("Submitted!");
    console.log(data.retCode);
    const info = { code: data.retCode, name: data.name };
    let target = undefined;
    console.log(info);

    const appointments = await fetchData();
    console.log("Appoinments fetched!");
    console.log(appointments);

    let arrayLen = numProps(appointments);
    console.log("appointment length = " + arrayLen);

    for (let i = 0; i < appointments.length; i++) {
      console.log(appointments[i].name);
      console.log(appointments[i].retCode);
      if (
        appointments[i].name === data.name &&
        appointments[i].retCode === data.retCode
      ) {
        target = appointments[i];
        break;
      }
    }

    console.log("target =");
    console.log(target);

    // Lookup appointment, if it exists, generate an Appointment element.
    // Otherwise, post an error message.
    if (target !== undefined) {
      ReactDOM.render(
        <div>
          <ListContainer>
            <P>Please note that your retrieval code has not been changed.</P>
            <CardDiv>
              <Info>
                <List>
                  <li>
                    <b>Name: </b>
                    {target.name}
                  </li>
                  <li>
                    <b>E-mail: </b>
                    {target.email}
                  </li>
                  <li>
                    <b>Date: </b>
                    {new Date(target.date).toDateString()}
                  </li>
                  <li>
                    <b>Time: </b>
                    {target.time}
                  </li>
                  <li>
                    <b>Phone #:</b>
                    {target.phoneNumber}
                  </li>
                  <li>
                    <b>Appointment Type: </b>
                    {target.apptType}
                  </li>
                  <li>
                    <b>Notes: </b>
                    {target.notes}
                  </li>
                </List>
              </Info>
              <ButtonDiv>
                <AcceptButton onClick={() => updateAppointment(target)}>
                  <FaPen />
                </AcceptButton>
                <DeleteButton onClick={() => deleteAppointment(target)}>
                  <FaTimes />
                </DeleteButton>
              </ButtonDiv>
            </CardDiv>
          </ListContainer>
        </div>,
        document.getElementById("result")
      );
    } else {
      ReactDOM.render(
        <P>No entry was found. Please verify your credentials.</P>,
        document.getElementById("result")
      );
    }
  };

  return (
    <Page>
      <PageContainer>
        <Title>Appoinment Retrieval</Title>
        <H2>Enter your code below!</H2>
        <FormWrapper>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="name">Name</Label>
            <TextFeild
              type="text"
              name="name"
              ref={register({ required: true })}
            />

            <Label htmlFor="retCode">Code</Label>
            <TextFeild
              type="text"
              name="retCode"
              ref={register({ required: true })}
            />
            <SubmitButton>Retrieve!</SubmitButton>
          </FormContainer>
        </FormWrapper>
        <div id="formSpace"></div>
        <div id="result"></div>
      </PageContainer>
    </Page>
  );
};

export default RetCode;
