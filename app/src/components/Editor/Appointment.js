import React, {useState, useEffect} from "react";
import {
  CardDiv,
  Info,
  P,
  ButtonDiv,
  DeleteButton,
  AcceptButton,
} from "./EditorElements";
import { FaTimes, FaCheck } from "react-icons/fa";


// TODO: Add delete functionality!
// TODO: Add edit functioanlity!

function Appointment(props) {


  console.log("Appointment module recieved:");
  console.log(props.appt);

  const displayAppointments = (props) => {
    const { appointments } = props;

    if (props !== null) {
        return(
            // props.map((appt, index) => {
            // console.log(appt);
            // return (
                <div>
                <CardDiv>
                  <Info>
                    <ul>
                      <li>{props.appt.name}</li>
                      <li>{props.appt.email}</li>
                      <li>{props.appt.date}</li>
                      <li>{props.appt.time}</li>
                      <li>{props.appt.apptType}</li>
                      <li>{props.appt.notes}</li>
                    </ul>
                  </Info>
                  <ButtonDiv>
                    <DeleteButton onClick={console.log("Delete button clicked!")}>
                      <FaTimes />
                    </DeleteButton>
                    <AcceptButton>
                      <FaCheck />
                    </AcceptButton>
                  </ButtonDiv>
                </CardDiv>
              </div>
        //     )
        // })
        )} else {
            return (<P>Whoops! No appointments scheduled yet.</P>)
    }
  };

  return (
      <>
      {displayAppointments(props)}
      </>
    
  );
}

export default Appointment;
