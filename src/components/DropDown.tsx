import React from 'react';
import { Switch } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface DropDownProps {
  isCheck: boolean;
}

const SubMenuList = styled.li`
  padding: 5px;
  width: 120px;
  font-size: 20px;
  cursor: pointer;
`;

function DropDown(props: DropDownProps) {
  return props.isCheck ? (
    <Switch>
      <Link to="/signin">
        <SubMenuList>로그인</SubMenuList>
      </Link>
      <Link to="/signup">
        <SubMenuList>회원가입</SubMenuList>
      </Link>
    </Switch>
  ) : (
    <>
      <Switch>
        <Link to="/mypage">
          <SubMenuList>마이페이지</SubMenuList>
        </Link>
      </Switch>
      <SubMenuList>로그아웃</SubMenuList>
    </>
  );
}

export default DropDown;
