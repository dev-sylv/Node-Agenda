import React from "react";
import styled from "styled-components";

const RegisterForm = () => {
  return (
    <div>
      <Right>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Password" />
        <Box placeholder="Message" />
        <Button type="submit">Submit</Button>
      </Right>
    </div>
  );
};

export default RegisterForm;

const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 350ms;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  :hover {
    transform: scale(0.9);
    background-color: #f5f5f5;
    color: blue;
    border: 1px solid purple;
  }
`;
const Box = styled.textarea`
  /* width: 200px; */
  display: flex;
  padding-left: 15px;
  padding-top: 20px;
  height: 90px;
  border: 1px solid #ced4da;
  outline: none;
  resize: none;
  ::placeholder {
    font-size: 17px;
  }
`;
const Input = styled.input`
  /* width: 100%; */
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  ::placeholder {
    font-size: 17px;
  }
`;
const Right = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
    justify-content: center; */
  background-color: red;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;
