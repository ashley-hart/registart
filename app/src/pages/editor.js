import React from "react";
import ApptCard from "../components/Other/ApptCard";
import AppointmentList from "../components/Editor";
import { Page, PageContainer, Title, P } from "./PageComponents.js";

const Editor = () => {
  return (
    <div>
      <Page>
        <PageContainer>
          <Title>Appointment Editor Tool</Title>
          <P>Here are the appointments clients have made with you.</P>
          <AppointmentList />
        </PageContainer>
      </Page>
    </div>
  );
};

export default Editor;
