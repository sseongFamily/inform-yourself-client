import React, { useState } from 'react';
import styled from 'styled-components';
import SignInImage from '../../images/undraw_Login_re_4vu2.png';
import { login } from '../../api/UserApi';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../modules/user';
import { useHistory } from 'react-router';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { EmailOutline } from '@styled-icons/evaicons-outline';
import { LockPassword } from '@styled-icons/remix-fill';
import { Bubble } from '@styled-icons/icomoon/Bubble';
import { Github } from '@styled-icons/evaicons-solid/Github';
import { Link } from 'react-router-dom';
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

// const UserImage = styled.div`
//   width: 100px;
//   height: 100px;
//   top: 40px;
//   bottom: 40px;
//   margin: -50px auto;
//   border-radius: 50%;
// `;

const InputDiv = styled.div`
  width: 50%;
  height: 420px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 70px;
  border-radius: 20px;
  box-shadow: 1px 1px 3px 1px gray;
`;

const InputElement = styled.input`
  width: 70%;
  height: 30px;
  border: 2px solid lightgray;
  border-radius: 30px;
  margin: 10px 20px;
  font-size: 18px;
  font-weight: bold;
`;

const ButtonElement = styled.button`
  width: 85%;
  height: 50px;
  border: none;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #6c63ff;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.5s;

  &:hover {
    background-color: #e6e6ef;
    color: #6c63ff;
    transition: 0.7s;
  }
`;

function Signin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async () => {
    const userInfo = await login(email, password);

    dispatch(userLogin(userInfo));
    history.push('/');
  };

  const moveSignup = () => {
    history.push('/signup');
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
          <InputDiv>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <EmailOutline size="30" style={{ paddingLeft: '20px' }} />
              <InputElement type="text" placeholder="email" name="email" onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LockPassword size="30" style={{ paddingLeft: '20px' }} />
              <InputElement
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <ButtonElement onClick={handleLogin}>Sign In</ButtonElement>
            <ButtonElement onClick={moveSignup}>Sign Up</ButtonElement>
            <button
              style={{
                border: 'none',
                width: '85%',
                height: '50px',
                margin: '0 auto',
                borderRadius: '30px',
                marginTop: '20px',
                fontWeight: 'bold',
                fontSize: '20px',
                backgroundColor: 'yellow',
              }}
            >
              <Bubble size="22px" />
              &nbsp; Kakao
            </button>

            <button
              style={{
                border: 'none',
                width: '85%',
                height: '50px',
                margin: '0 auto',
                borderRadius: '30px',
                marginTop: '20px',
                fontWeight: 'bold',
                fontSize: '20px',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              <Github size="22px" />
              &nbsp;GitHub
            </button>
          </InputDiv>
        </div>
      </LeftArea>
      <RightArea></RightArea>
    </SignInContainer>
  );
}

export default Signin;
