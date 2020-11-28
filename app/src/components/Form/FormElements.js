import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  width: 50%;
  flex-direction: column;
  background-color: rgba(0,0,0,.5);
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
`;

export const FormContainer = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  
`;

export const TextFeild = styled.input`
  width: 75%;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 10px 5px 25px 5px;
  border: 5px black;
  border-color: black;
  border-radius: 4px;
`;

export const NotesFeild = styled.textarea`
  resize: none;
  box-sizing: border-box;
  width: 75%;
  height: 200px;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 10px;
  border: 5px black;
  border-color: black;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  border: 50px;
  border-color: black;
  border-radius: 5px;
  margin: 10px 5px;
  padding: 7px 10px;
  width: 25%;
  background: #0266f2;
  color: white;
  &:hover {
    background: #0244a1;
  }
`;

export const Label = styled.label`
  margin: 5px 3px 0px 3px;
  font-size: 1rem;
  font-weight: bold;
  display: block;
  float: left;
`;
