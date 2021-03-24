import React from 'react';
import styled from 'styled-components';
import SignUpImage from '../../images/signup_img.svg';

const SignUpContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 450px;
  margin: 0 auto;
  padding-top: 70px;
  border: 1px solid #333;
  border-radius: 20px;
`;

const RightArea = styled.div`
  flex: 1;
  background-image: url(${SignUpImage});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const UserImage = styled.div`
  width: 100px;
  height: 100px;
  top: 40px;
  bottom: 40px;
  margin: -50px auto;
  border: 1px solid #333;
  border-radius: 50%;
`;

const InputElement = styled.input`
  width: 70%;
  height: 30px;
  border: 1px solid #333;
  border-radius: 30px;
  margin: 10px auto;
`;

const ButtonElement = styled.button`
  width: 72%;
  height: 50px;
  border: 1px solid #333;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 100px;
`;

function SignUp() {
  return (
    <SignUpContainer>
      <LeftArea>
        <div>
          <UserImage></UserImage>
          <InputBox>
            <InputElement type="text" placeholder="email" />
            <InputElement type="password" placeholder="password" />
            <InputElement type="text" placeholder="Name" />
            <InputElement type="text" placeholder="ex) 01012345678" />
            <ButtonElement>Sign Up</ButtonElement>
          </InputBox>
        </div>
      </LeftArea>
      <RightArea></RightArea>
    </SignUpContainer>
  );
}

export default SignUp;
