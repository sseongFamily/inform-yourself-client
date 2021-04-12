import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserCircle } from '@styled-icons/boxicons-regular';
import { Clipboard } from '@styled-icons/bootstrap';
import { PencilSquare } from '@styled-icons/bootstrap/PencilSquare';
import { Users } from '@styled-icons/feather';
import styled from 'styled-components';
import DropDown from './DropDown';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/reducer';
import { UserPin } from '@styled-icons/boxicons-solid/UserPin';

const Nav = styled.div`
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #969696;
  box-sizing: border-box;
  position: fixed;
  background-color: white;
  z-index: 10;
`;

const InfoCard = styled(Clipboard)`
  color: rgb(52, 58, 64);
  &:hover {
    color: #6c63ff;
    transition: 0.3s;
  }
`;
const WriteCard = styled(PencilSquare)`
  color: rgb(52, 58, 64);
  &:hover {
    color: #6c63ff;
    transition: 0.3s;
  }
`;
const Logo = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 50px;
  position: absolute;
  top: 10%;
  left: 40%;
  text-decoration: none;
  color: rgb(52, 58, 64);
  &:hover {
    color: #6c63ff;
    transition: 0.3s;
  }
`;

const UserInfoBtn = styled(Users)`
  margin-right: 100px;
  cursor: pointer;
  color: rgb(52, 58, 64);
  &:hover {
    color: #6c63ff;
    transition: 0.3s;
  }
`;

const UserNoImage = styled(UserPin)`
  margin-right: 100px;
  height: 45px;
  width: 45px;
  cursor: pointer;
  color: rgb(52, 58, 64);
  &:hover {
    color: #6c63ff;
    transition: 0.3s;
  }
`;

const Profile = styled.div`
  margin-right: 100px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid rgb(52, 58, 64);
  background-image: url('');
  background-size: contain;
  cursor: pointer;
`;

const SubMenu = styled.ul`
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: 2px solid rgb(52, 58, 64);
  border-radius: 10px;
  text-align: center;
  position: fixed;
  z-index: 999;
  list-style: none;
  right: 57px;
  top: 80px;
`;
function MainNav() {
  const state = useSelector((state: RootState) => state.userReducer);
  const { isLogin = false } = state;
  const { profileImage } = state.userInfo;

  // TODO: 비로그인시 board, letter, mypage 버튼
  // TODO: 비로그인시 back, letter, myapge 버튼
  // 비로그인 false , 로그인 true
  const [menuCheck, setMenuCheck] = useState(false);

  // useRef를 2개로 나눈 이유는 각각의 element 태그 타입이 달라서 !!
  // 첫 번째는 div태그, 두 번째는 svg(icon) 태그
  const subMenuBoxDiv = useRef<HTMLDivElement>(null);
  const subMenuBoxStyle = useRef<SVGSVGElement>(null);

  const menuToggle = () => {
    setMenuCheck(!menuCheck);
  };

  const handleClickOutside = (event: any): void => {
    if (subMenuBoxDiv.current && !subMenuBoxDiv.current.contains(event.target)) {
      setMenuCheck(false);
    } else if (subMenuBoxStyle.current && !subMenuBoxStyle.current.contains(event.target)) {
      setMenuCheck(false);
    }
  };
  const handleLink = () => {
    if (isLogin) {
      if (!state.cardInfo) {
        return '/createcard';
      }
      return '/mypage';
    }
    return '/signin';
  };
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [subMenuBoxDiv, subMenuBoxStyle, state.isLogin]);

  return (
    <Nav>
      <Container>
        <div
          style={{
            display: 'flex',
            width: '10%',
            justifyContent: 'space-between',
            marginLeft: '100px',
          }}
        >
          <Link to="/infocard">
            <InfoCard size="40" />
          </Link>
          <Link to={handleLink}>
            <WriteCard size="40" />
          </Link>
        </div>
        <Link to="/">
          <Logo>Inform Yourself</Logo>
        </Link>
        {isLogin ? (
          profileImage ? (
            <Profile onClick={menuToggle} ref={subMenuBoxDiv} />
          ) : (
            <UserNoImage onClick={menuToggle} ref={subMenuBoxStyle} />
          )
        ) : (
          <UserInfoBtn size="48" onClick={menuToggle} ref={subMenuBoxStyle} />
        )}
      </Container>
      {menuCheck && (
        <SubMenu>
          <DropDown isLogin={isLogin} />
        </SubMenu>
      )}
    </Nav>
  );
}

export default MainNav;
