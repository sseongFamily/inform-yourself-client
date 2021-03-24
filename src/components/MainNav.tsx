import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle } from '@styled-icons/boxicons-regular';
import { Clipboard } from '@styled-icons/bootstrap';
import styled from 'styled-components';
import DropDown from './DropDown';
const Nav = styled.div`
  height: 70px;
  box-sizing: border-box;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #333;
  height: 70px;
  box-sizing: border-box;
  position: fixed;
  justify-content: space-between;
  align-items: center;
`;

const InfoCard = styled(Clipboard)`
  margin-left: 100px;
`;
const Logo = styled.span`
  font-size: 30px;
`;

const UserInfoBtn = styled(UserCircle)`
  margin-right: 100px;
`;

const Profile = styled.div`
  margin-right: 100px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid #333;
  background-image: url('');
  background-size: contain;
`;

const SubMenu = styled.ul`
  padding: 0;
  margin: 0;
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  position: fixed;
  z-index: 999;
  list-style: none;
  right: 56px;
  top: 80px;
`;
function MainNav() {
  // TODO: 비로그인시 board, letter, mypage 버튼
  // TODO: 비로그인시 back, letter, myapge 버튼
  // 비로그인 false , 로그인 true
  const [isCheck, setIsCheck] = useState(false);
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

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [subMenuBoxDiv, subMenuBoxStyle]);

  return (
    <Nav>
      <Container>
        <Link to="/infocard">
          <InfoCard size="40" />
        </Link>
        <Link to="/">
          <Logo>Inform Yourself</Logo>
        </Link>
        {isCheck ? (
          <Profile onClick={menuToggle} ref={subMenuBoxDiv} />
        ) : (
          <UserInfoBtn size="48" onClick={menuToggle} ref={subMenuBoxStyle} />
        )}
      </Container>
      {menuCheck && (
        <SubMenu>
          <DropDown isCheck={isCheck} />
        </SubMenu>
      )}
    </Nav>
  );
}

export default MainNav;
