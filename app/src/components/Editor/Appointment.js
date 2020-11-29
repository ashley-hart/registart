import React from "react";
import ReactDOM from 'react-dom';
import {
  CardDiv,
  Info,
  P,
  ButtonDiv,
  DeleteButton,
  AcceptButton,
  List,
} from "./EditorElements";
import { FaTimes, FaPen } from "react-icons/fa";
import axios from "axios";
import EditorForm from "./EditorForm";

function Appointment(props) {
  console.log("Appointment module recieved:");
  console.log(props.appt);

  const deleteAppointment = () => {
    const id = props.appt._id;
    console.log("Delete appointment recieved: ");
    console.log(id);

    if(window.confirm("Do you want to delete this appointment?") === true){
      axios
        .delete("http://localhost:5000/editor/" + id)
        .then((res) => console.log(res.data));
        window.location.reload();
    } else {
      console.log("Opted out of page reload.");
    }
  };

  // Idea: Render in a form that will take in new data and change what is present on the screen.
  const updateAppointment = () => {
    console.log("updateAppointment received:");
    console.log(props.appt);

    if(window.confirm("Do you want to update this appointment?") === true){
      console.log("Updating appointment entry!");

      // Pass the entire appointment to the editor form.
      ReactDOM.render(<EditorForm appt={props.appt}/>, document.getElementById("formSpace"));
    } else {
      console.log("Opted out of page reload.");
    }

  };

  const displayAppointments = () => {
    let date = Date(props.appt.date);
    console.log(date);

    if (props.length !== 0) {
      return (
        <div>
          <CardDiv>
            <Info>
              <List>
                <li>
                  <b>Name: </b>
                  {props.appt.name}
                </li>
                <li>
                  <b>E-mail: </b>
                  {props.appt.email}
                </li>
                <li>
                  <b>Date: </b>
                  {new Date(props.appt.date).toDateString()}
                </li>
                <li>
                  <b>Time: </b>
                  {props.appt.time}
                </li>
                <li>
                  <b>Phone #: </b>
                  {props.appt.phoneNumber}
                </li>
                <li>
                  <b>Appointment Type: </b>
                  {props.appt.apptType}
                </li>
                <li>
                  <b>Notes: </b>
                  {props.appt.notes}
                </li>
              </List>
            </Info>
            <ButtonDiv>
              <DeleteButton onClick={deleteAppointment}>
                <FaTimes />
              </DeleteButton>
              <AcceptButton onClick={updateAppointment}>
                <FaPen />
              </AcceptButton>
            </ButtonDiv>
          </CardDiv>
        </div>
      );
    } else {
      return <P>Whoops! No appointments scheduled yet.</P>;
    }
  };

  return <><div id="formSpace"></div><div>{displayAppointments()}</div></>;
}

export default Appointment;
