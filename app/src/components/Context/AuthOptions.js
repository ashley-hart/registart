import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom'
import UserContext from "./UserContext";

const AuthOptions = () => {
    const { userData, setUserData } = useContext(UserContext);
    // const history = useHistory();

    return (
        <div>
            <CardDiv>
                <Info>
                    <ul>
                        <li>{props.appt.name}</li>
                        <li>{props.appt.email}</li>
                        <li>{props.appt.date}</li>
                        <li>{props.appt.time}</li>
                    </ul>
                </Info>
                <ButtonDiv>
                    <DeleteButton><FaTimes /></DeleteButton>
                    <AcceptButton><FaCheck /></AcceptButton>
                </ButtonDiv>
            </CardDiv>
        </div>
    )
}

export default AuthOptions
