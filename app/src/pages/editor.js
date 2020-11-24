import React from 'react'
import Tool from '../components/Editor';
import {Button, P, Page, PageContainer, Title} from './PageComponents.js'

const Editor = () => {
    return (
        <div>
            <PageContainer>
                <Page>
                    <Title>Appointment Editor Tool</Title>
                    <Button>Retrieval Code?</Button>
                </Page>
            </PageContainer>
            <div>
                <Tool />
            </div>
        </div>
    )
}

export default Editor