import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  flex: 1;
  flex-direction: "column";
  padding: "10%";
  /* background-color: #adcfff; */
  padding: 10px;
`;

export const FormContainer = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(0,0,0,.5);
  margin: 10px;
`;

export const CardDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #0244a1;
  width: 70%;
  padding: 15px 60px;
  margin: 20px 100px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0266f2;
    transition: all 0.2s ease-in-out;
  }
`;

export const Info = styled.div`
  padding: 10px;
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  word-wrap: normal;
  /* width: 50%; */
`;

export const P = styled.p`
  color: white;
`;

export const ButtonDiv = styled.div`
  align-items: end;
  /* padding: 5px; */
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 30%;
  /* position: relative; */
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  color: white;
  border: none;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: red;
  cursor: pointer;
`;

export const AcceptButton = styled.button`
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 30%;
  /* position: relative; */
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: green;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style-type: none;
`


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
