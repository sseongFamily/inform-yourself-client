import React, { useState } from 'react';
import styled from 'styled-components';
import SignInImage from '../../images/undraw_Login_re_4vu2.png';
import { login } from '../../api/UserApi';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../modules/user';

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
  padding-top: 70px;
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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const userInfo = await login(email, password);
    dispatch(userLogin(userInfo));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <SignInContainer>
      <LeftArea>
        <div>
          <UserImage></UserImage>
          <InputDiv>
            <InputElement type="text" placeholder="email" name="email" onChange={handleChange} />
            <InputElement
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <ButtonElement onClick={handleLogin}>Sign In</ButtonElement>
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
