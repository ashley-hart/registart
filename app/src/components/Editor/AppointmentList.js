import React, { useState, useEffect } from "react";
import { ListContainer, P } from "./EditorElements";
import axios from "axios";
import Appointment from "./Appointment";

// Appointments reside here: http://localhost: 5000/editor/
export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  // Upon render, fetch appointment data from API and store it in an array
  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/editor/");
    const data = response.data;
    setAppointments(data);
  }, []);

  // I tried adding this just to make sure that my hook was updating.
  useEffect(() => {
    console.log("Appointments updated!");
    console.log(appointments);
  }, [appointments]);

  // I want to pass my appointment data into a compoinent so I can render 
  // it to the screen.
  return (
    <div>
      <ListContainer>
        {appointments.map(a => <Appointment appt={a}/>)}
      </ListContainer>
    </div>
  );
}

// export default AppointmentList;

//   const getAppointmentList = () => {
//     axios
//       .get("http://localhost:5000/editor/")
//       .then((res) => {
//         console.log(res.data);
//         const allAppointments = res.data;
//         console.log(allAppointments)
//         getAppointments(allAppointments);
//         console.log("getAppointments returned: " + appointments);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//       console.log(appointments);
//   };
