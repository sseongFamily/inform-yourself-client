import React from 'react';
import { UserInfo } from '../types/userType';
import profile from '../images/sseong.png';

function UserCard(props: UserInfo) {
  console.log(props.profileImage);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px', height: '200px' }}>
      <div className="infoSection" style={{ display: 'flex' }}>
        <img src="../images/sseong.png" alt="profileImage" />
        <div className="content">
          <div className="name">{props.userName}</div>
          <div className="oneLine">{props.oneLineIntroduce}</div>
        </div>
      </div>

      <div className="stackSection">
        {props.stack.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
