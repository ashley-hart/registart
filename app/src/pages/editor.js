import React from "react";
import AppointmentList from "../components/Editor";
import { Page, PageContainer, Title, P } from "./PageComponents.js";

const Editor = () => {
  return (
    <div>
      <Page>
        <PageContainer>
          <Title>Appointment Editor Tool</Title>
          <P>Here are the appointments clients have made with you.</P>
            <P>Please note that appointments near the bottom are the most recently scheduled.</P>
          <AppointmentList />
        </PageContainer>
      </Page>
    </div>
  );
};

export default Editor;
