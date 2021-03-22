import React from 'react';

function Signin() {
  return (
    <div>
      <div>
        <div>사람 모양 잡아줄 영역</div>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign In</button>
        <button>Kakao</button>
        <button>GitHub</button>
        <button>Sign Up</button>
      </div>
      <div>이미지 들어갈 자리</div>
    </div>
  );
}

export default Signin;
