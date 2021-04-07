import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import SignUpImage from '../../images/signup_img.svg';
import { ArrowBack } from '@styled-icons/evaicons-solid';
import { signUp } from '../../api/UserApi';
import { useHistory } from 'react-router';
import { EmailOutline } from '@styled-icons/evaicons-outline';
import { LockPassword } from '@styled-icons/remix-fill';
import { UserCheck } from '@styled-icons/boxicons-regular';
import { Telephone } from '@styled-icons/bootstrap';
import { BirthdayCake } from '@styled-icons/fa-solid';

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
  border-radius: 20px;
  box-shadow: 1px 1px 3px 1px gray;
  border-radius: 20px;
`;

const RightArea = styled.div`
  flex: 1;
  background-image: url(${SignUpImage});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin-right: 100px;
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

function SignUp() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleChangeInputElement = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        return setPassword(event.target.value);
      case 'userName':
        return setUserName(event.target.value);
      case 'phoneNumber':
        return setPhoneNumber(event.target.value);
      case 'birthday':
        return setBirthday(event.target.value);
      default:
        return;
    }
  };

  const handleRequestSignUp = async () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('이메일 형식을 확인해주세요.');
      return;
    }
    if (password.length > 20 || password.length <= 7) {
      alert('비밀번호는 8~20자 입니다.');
      return;
    }
    if (userName === '') {
      alert('이름을 확인해주세요.');
      return;
    }
    if (!/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/.test(phoneNumber)) {
      alert('핸드폰 번호를 확인해주세요.');
      return;
    }
    if (birthday === '') {
      alert('생년월일을 확인해주세요');
      return;
    }

    //* src/api.UserApi.ts 파일 참조
    // 회원가입이 끝나면 로그인 페이지로 이동 시킨다.
    (await signUp(email, password, userName, phoneNumber, birthday))
      ? history.push('/signin')
      : alert('중복된 이메일 입니다.');
  };

  return (
    <SignUpContainer>
      <LeftArea>
        <div>
          <UserImage></UserImage>
          <InputBox>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <EmailOutline size="30" style={{ paddingLeft: '20px' }} />
              <InputElement
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChangeInputElement}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LockPassword size="30" style={{ paddingLeft: '20px' }} />
              <InputElement
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChangeInputElement}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserCheck size="30" style={{ paddingLeft: '20px' }} />
              <InputElement
                type="text"
                name="userName"
                placeholder="Name"
                onChange={handleChangeInputElement}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Telephone size="30" style={{ paddingLeft: '20px' }} />
              <InputElement
                type="text"
                name="phoneNumber"
                placeholder="ex) 01012345678"
                onChange={handleChangeInputElement}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
              }}
            >
              <BirthdayCake size="30" style={{ paddingLeft: '20px' }} />
              <InputElement
                type="text"
                name="birthday"
                placeholder="ex) 20000101"
                onChange={handleChangeInputElement}
              />
            </div>
            <ButtonElement onClick={handleRequestSignUp}>Sign Up</ButtonElement>
            <ButtonElement>⬅</ButtonElement>
          </InputBox>
        </div>
      </LeftArea>
      <RightArea></RightArea>
    </SignUpContainer>
  );
}

export default SignUp;
