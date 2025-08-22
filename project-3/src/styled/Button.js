import styled from "styled-components";

export const Button = styled.button`
      padding: 10px 18px;
      min-width: 220px;
      border-radius: 5px;
      background-color: #000000;
      color: white;
      border: none;
      font-size: 16px;
      cursor: pointer;
      transition: 0.4s background ease-in;
      
      &:hover{
        background-color: #cfb5b5;
        transition: 0.3s background ease-in;
        border: 1px solid black;
        color: black;
      }
`;

export const OutlineButton = styled(Button)`
      background-color: white;
      border: 1px solid black;
      color: black;
      
      &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
      }
`;