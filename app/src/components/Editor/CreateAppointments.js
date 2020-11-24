import { H2 } from './EditorElements'
import { Component } from 'react'

export default class CreateAppointment extends Component {
    constructor(props) {
        super(props) // always call super when working with subclasses

        this.state = {
            username = "",
        }
    }
    
    // Replicate this for every feild in your datatype
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    render() {
        return (
            <div>
                <p>You are on the Create Appointment component!</p>
            </div>
        )
    }
}