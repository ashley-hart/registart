import React, { useState, useEffect } from "react";
import { ListContainer } from "./EditorElements";
import axios from "axios";
import Appointment from "./Appointment";

// Appointments reside here: http://localhost: 5000/editor/
export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  // Upon render, fetch appointment data from API and store it in an array
  useEffect(() => {
    // The following is an immeidately invoked function call.
    (async () => {
      const result = await axios.get("http://localhost:5000/editor/");
      setAppointments(result.data);
    })();
  }, []);

  // I tried adding this just to make sure that my hook was updating.
  useEffect(() => {
    console.log("Appointments updated!");
    console.log(appointments);
  }, [appointments]);

  // I want to pass my appointment data into a compoinent so I can render 
  // it to the screen.
  return (
    <div id="listwrapper">
    <ListContainer>
      {appointments.map(a => <Appointment appt={a}/>)}
    </ListContainer>
    </div>
  );
}
