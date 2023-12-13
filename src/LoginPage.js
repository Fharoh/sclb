// LoginPage.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignInHeader = styled.h1`
  color: #c80815;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
`;

const FormInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const EyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  background-color: #c80815;
  color: #fff;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AccentLine = styled.div`
  width: 3px;
  height: 80%;
  background-color: #c80815;
  align-self: center;
`;

const RightPanel = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: auto;
  max-height: auto;
`;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container>
      <Panel backgroundColor="#ffffff">
        <LoginForm className="leftPanel">
          <SignInHeader>Sign In</SignInHeader>
          <FormGroup>
            <FormLabel htmlFor="staffEmail">E-mail</FormLabel>
            <FormInput type="text" id="staffEmail" placeholder="username@slcb.com"/>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
            />
            <EyeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
            />
          </FormGroup>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </LoginForm>
      </Panel>
      <AccentLine className="accentLine" />
      <Panel backgroundColor="#fffff">
        <RightPanel className="rightpanel">
          <Image src="slcb_logo_nobg.png" alt="SLCB Logo" />
        </RightPanel>
      </Panel>
    </Container>
  );
};

export default LoginPage;
