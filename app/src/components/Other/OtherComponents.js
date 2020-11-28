import styled from 'styled-components';
import { FaTimes, FaCheck } from "react-icons/fa";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #0244a1;
    width: 60%;
    padding: 30px 60px;
    margin: 50px 100px;
    border-radius: 5px;
`;

export const Info = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
`;

export const P = styled.p`
  color: white
`;

export const ButtonDiv = styled.div`
  align-items: end;
  padding: 10px;
`

export const DeleteButton = styled.button`
  display: flex;
  padding: 3px;
  margin: 10px;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: white;
  border: none;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  background-color: red;
  cursor: pointer;
`;

export const AcceptButton = styled.button`
  display: flex;
  padding: 3px;
  margin: 10px;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: white;
  border: none;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  background-color: green;
  cursor: pointer;
`;