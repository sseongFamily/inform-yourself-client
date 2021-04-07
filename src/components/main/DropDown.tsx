import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { persistor } from '../../index';
import { RootState } from '../../modules/reducer';
import { userLogout } from '../../modules/user';

interface DropDownProps {
  isLogin: boolean;
}

const SubMenuList = styled.li`
  padding: 5px;
  width: 120px;
  font-size: 20px;
  color: #000;
  cursor: pointer;
`;

function DropDown(props: DropDownProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    persistor
      .purge()
      .then(() => {
        //? 이게 뭐냐고
        return persistor.flush();
      })
      .then(() => {
        //? 이게 뭐냐고
        persistor.pause();
        dispatch(userLogout());
        return history.push('/');
      });
  };
  return props.isLogin ? (
    <>
      <Link to="/mypage">
        <SubMenuList>마이페이지</SubMenuList>
      </Link>
      <SubMenuList onClick={logout}>로그아웃</SubMenuList>
    </>
  ) : (
    <>
      <Link to="/signin">
        <SubMenuList>로그인</SubMenuList>
      </Link>
      <Link to="/signup">
        <SubMenuList>회원가입</SubMenuList>
      </Link>
    </>
  );
}

export default DropDown;
