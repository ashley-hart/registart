import React from 'react'
import { H2 } from './EditorElements'
import AppointmentList from './AppointmentList'

// TODO: Move this so it is only accessible AFTER as successful sign-in.

function Tool() {
    return (
        <>
            <AppointmentList />
        </>
    )
}

export default Tool
