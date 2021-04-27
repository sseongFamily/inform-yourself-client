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
  display: flex;
  flex-direction: column;
`;

const UrlButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  margin: 20px 5px;
  background-color: #746eee;
  color: white;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 1px 1px 3px 1px #ada6a6;

  &:hover {
    width: 100px;
    height: 50px;
    color: #746eee;
    background: white;
    transition: 0.8s;
  }
`;

function SeokWon() {
  return (
    <div>
      <UserCard
        size={'large'}
        profileImage={'../images/signup_img.svg'}
        userName={'성석원'}
        oneLineIntroduce={'타입스크립트 공부합시다'}
        stack={['javascript', 'node', 'React', 'TypeScript']}
      />
      <Box>
        <UrlButton onClick={() => window.open('https://velog.io/@one_dev', '_blank')}>
          Blog
        </UrlButton>
        <UrlButton onClick={() => window.open('https://github.com/SeongSeokwon', '_blank')}>
          Git Hub
        </UrlButton>
      </Box>
    </div>
  );
}

export default SeokWon;
