import React from 'react';
import styled from 'styled-components';
import SeokMin from '../../components/developer/SeokMin';
import SeokWon from '../../components/developer/SeokWon';

const DeveloperContainer = styled.div`
  height: 100vh;
`;

const H1Element = styled.h1`
  font-size: 32px;
  text-align: center;
`;

const DeveloperBox = styled.div`
  height: 70%;
  display: flex;
  border: 1px solid red;
`;

const SeokWonDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SeokMinDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Developer() {
  return (
    <DeveloperContainer>
      <H1Element>Developer</H1Element>
      <DeveloperBox>
        <SeokWonDiv>
          <SeokWon />
        </SeokWonDiv>
        <SeokMinDiv>
          <SeokMin />
        </SeokMinDiv>
      </DeveloperBox>
    </DeveloperContainer>
  );
}

export default Developer;
