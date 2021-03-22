import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainNav() {
  // TODO: 비로그인시 board, letter, mypage 버튼
  // TODO: 비로그인시 back, letter, myapge 버튼
  // 비로그인 false , 로그인 true
  const [isCheck, setIsCheck] = useState(false);

  // console.log(window.location.href.slice(22) === 'infocard');

  return (
    <div>
      <Link to="/infocard">
        <i className="far fa-clipboard fa-3x" />
      </Link>
      <Link to="/">
        <span>Inform Yourself</span>
      </Link>
      {isCheck ? 'profile' : <i className="far fa-address-card fa-3x" />}
    </div>
  );
}

export default MainNav;
