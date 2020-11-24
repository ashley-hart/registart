import React from 'react'
import Form from '../components/Form';
import {P, Page, PageContainer, Title} from './PageComponents.js'
// import { FaCentercode } from 'react-icons/fa'

const Home = () => {
    return (
        <>
        <Page>
            <PageContainer>
                    <Title>Hi, there!</Title>
                    <P>Welcome to Registart! I am so glad you are here! Please use the following form 
                        to set an appointment with me. I am looking forward to getting in touch!</P>
                    <Form />
            </PageContainer>
        </Page>
        </>
    )
}

export default Home
