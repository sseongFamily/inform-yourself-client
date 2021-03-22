import React from 'react';

function SignUp() {
  return (
    <div>
      {/* signup input요소 div */}
      <div>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="ex) 01012345678" />
        <button>Sign Up</button>
      </div>
      {/* signup 이미지 넣는 div */}
      <div>Signup 이미지</div>
    </div>
  );
}

export default SignUp;
