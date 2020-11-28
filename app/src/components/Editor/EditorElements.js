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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardDiv = styled.div`
/* position: relative; */
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
  /* width: 50%; */
`;

export const P = styled.p`
  color: white;
`;

export const ButtonDiv = styled.div`
  align-items: end;
  padding: 5px;
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: 3px;
  margin: 10px;
  width: 100%;
  height: 30%;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
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
  padding: 3px;
  margin: 10px;
  width: 100%;
  height: 30%;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
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
