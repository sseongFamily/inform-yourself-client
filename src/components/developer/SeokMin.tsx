import React from 'react';
import styled from 'styled-components';
import UserCard from '../card/UserCard';

const Box = styled.div`
  height: 350px;
  width: 500px;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px 1px gray;
  border-radius: 15%;
  padding-left: 20px;
  padding-top: 20px;
  margin-left: 10px;
`;

function SeokMin() {
  return (
    <div>
      <UserCard
        size={'large'}
        profileImage={'../images/signup_img.svg'}
        userName={'성석민'}
        oneLineIntroduce={'잘부탁 드립니다.'}
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

export default SeokMin;
