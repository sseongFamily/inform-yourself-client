import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle } from '@styled-icons/boxicons-regular';
import { Clipboard } from '@styled-icons/bootstrap';
import styled from 'styled-components';
import DropDown from './DropDown';
const Nav = styled.div`
  height: 70px;
  border-bottom: 2px solid #333;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
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
  position: absolute;
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

  const subMenuBox = useRef<HTMLDivElement>(null);

  const menuToggle = () => {
    setMenuCheck(!menuCheck);
  };

  const handleClickOutside = (event: any): void => {
    if (subMenuBox.current && !subMenuBox.current.contains(event.target)) {
      console.log(subMenuBox);
      setMenuCheck(false);
    }
    console.log(subMenuBox);
  };

  useEffect(() => {
    console.log('fsfd');
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [subMenuBox]);

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
          <div style={{ border: '1px solid red' }} ref={subMenuBox}>
            <UserInfoBtn size="48" onClick={menuToggle} />
          </div>
        ) : (
          <Profile onClick={menuToggle} ref={subMenuBox} />
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
