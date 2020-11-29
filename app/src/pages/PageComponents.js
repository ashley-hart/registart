import styled from 'styled-components';

export const Page = styled.div`
    /* height: 100%; */
    color: white;
    justify-content: center;
    align-items: center;
`;

export const PageContainer = styled.div`
    /* margin: 0px 75px; */
    background-color: #0c0a09;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    flex-direction: 'column';
    padding: '10px';
    margin: 30px 5px 20px 5px;
`;

export const P = styled.p`
    margin: 30px 40px;
`;

export const Image = styled.img`
  /* width: 50%; */
  max-width: 300px;
  max-height: 50%;
  border-radius: 3px;
`;

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  border: 50px;
  border-color: black;
  border-radius: 5px;
  padding: 7px 10px;
  width: 25%;
  background: #0266f2;
  color: white;
  &:hover {
    background: #0244a1;
  }
`;
