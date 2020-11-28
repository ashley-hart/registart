import React from 'react';
import { AcceptButton, DeleteButton, CardDiv, Info, P, ButtonDiv } from './OtherComponents';
import { FaTimes, FaCheck } from "react-icons/fa";

const ApptCard = () => {
    return (
        <div>
            <CardDiv>
                <Info>
                    <P>Info goes here.</P>
                </Info>
                <ButtonDiv>
                    <DeleteButton><FaTimes /></DeleteButton>
                    <AcceptButton><FaCheck /></AcceptButton>
                </ButtonDiv>
            </CardDiv>
        </div>
    )
}

export default ApptCard;