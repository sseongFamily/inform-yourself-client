import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const Box = styled.div`
  height: 250px;
  width: 300px;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px 1px gray;
  border-radius: 15%;
  padding-left: 20px;
  padding-top: 20px;
  margin-left: 5px;
`;

function SeokWon() {
  return (
    <div>
      <UserCard
        profileImage={'../images/signup_img.svg'}
        userName={'성석원'}
        stack={['javascript', 'node']}
      />
      <Box>
        <div>블로그 url</div>
        <div>레포 url</div>
        <div>등등 url</div>
      </Box>
    </div>
  );
}

export default SeokWon;
