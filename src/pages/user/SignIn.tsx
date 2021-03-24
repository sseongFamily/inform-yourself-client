import React from 'react';
import styled from 'styled-components';
import SignInImage from '../../images/undraw_Login_re_4vu2.png';

const SignInContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relatvie;
`;

const RightArea = styled.div`
  flex: 1;
  background-image: url(${SignInImage});
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

const InputDiv = styled.div`
  width: 50%;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 50px;
  border: 1px solid #333;
  border-radius: 20px;
`;

const InputElement = styled.input`
  width: 70%;
  height: 30px;
  border: 1px solid #333;
  border-radius: 30px;
  margin: 10px auto;
`;

const ButtonElement = styled.button`
  width: 70%;
  height: 50px;
  border: 1px solid #333;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 20px;
`;

function Signin() {
  return (
    <SignInContainer>
      <LeftArea>
        <div>
          <UserImage></UserImage>
          <InputDiv>
            <InputElement type="text" placeholder="email" />
            <InputElement type="password" placeholder="password" />
            <ButtonElement>Sign In</ButtonElement>
            <ButtonElement>Sign Up</ButtonElement>
            <button>Kakao</button>
            <button>GitHub</button>
          </InputDiv>
        </div>
      </LeftArea>
      <RightArea></RightArea>
    </SignInContainer>
  );
}

export default Signin;
