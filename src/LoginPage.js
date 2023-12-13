// LoginPage.js

import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
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
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
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

const EyeIcon = styled(FontAwesomeIcon)``;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  colour: #757575;
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

  const [onBlur, setOnBlur] = useState(false);
  const [onBlur2, setOnBlur2] = useState(false);

  return (
    <div className="containers">
      <Container>
        <Panel backgroundColor="#ffffff">
          <LoginForm className="leftPanel">
            <SignInHeader>Sign In</SignInHeader>
            <FormGroup>
              <FormLabel htmlFor="staffEmail">E-mail</FormLabel>
              <div
                style={{
                  border: onBlur2 ? "2px solid red" : "2px solid #cbd5e0",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "7px",
                  backgroundColor: "#e8f0fe",
                }}
                onBlur={() => setOnBlur2(false)}
                onFocus={() => setOnBlur2(true)}
              >
                <input />
              </div>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="password">Password</FormLabel>
              <div
                style={{
                  border: onBlur ? "2px solid #c80815" : "2px solid #cbd5e0",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "7px",
                  backgroundColor: "#e8f0fe",
                }}
                onBlur={() => setOnBlur(false)}
                onFocus={() => setOnBlur(true)}
              >
                <input type={showPassword ? "text" : "password"} />
                <EyeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                />
              </div>
            </FormGroup>
            <br />
            <SubmitButton type="submit">Sign In</SubmitButton>
          </LoginForm>
        </Panel>
        <AccentLine className="accentLine" />
        <Panel backgroundColor="#fffff">
          <div className="rightpanel">
            <RightPanel>
              <Image src="slcb_logo_nobg.png" alt="SLCB Logo" />
            </RightPanel>
          </div>
        </Panel>
      </Container>
    </div>
  );
};

export default LoginPage;
