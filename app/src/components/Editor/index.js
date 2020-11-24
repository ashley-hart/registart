import React from 'react'
import { H2 } from './EditorElements'
import EditAppointments from './EditAppointments'

// TODO: Move this so it is only accessible AFTER as successful sign-in.

function Tool() {
    return (
        <>
            <EditAppointments />
            <H2>Appointment Editor Tool</H2>
        </>
    )
}

export default Tool
