import React from 'react'
import ContactForm from '../components/Form/ContactForm.js'
import {P, Page, PageContainer, Title} from './PageComponents.js'

const Contact = () => {
    return (
        <>
        <Page>
            <PageContainer>
                    <Title>Let's get in touch!</Title>
                    <P>Questions? Concerns? Use the form below to send them my way!</P>
                    <ContactForm />
            </PageContainer>
        </Page>
        </>
    )
}

export default Contact
