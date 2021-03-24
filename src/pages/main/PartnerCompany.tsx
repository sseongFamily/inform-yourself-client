import React from 'react';
import styled from 'styled-components';
import CompanyImage from '../../images/undraw_Tree_swing_646s.png';

const CompanyContainer = styled.div`
  border: 1px solid red;
  height: 100vh;
`;

const H1Element = styled.h1`
  font-size: 32px;
  text-align: center;
`;

const DivElement = styled.div`
  height: 100%;
  border: 1px solid red;
  background-image: url(${CompanyImage});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

function PartnerCompany() {
  return (
    <CompanyContainer>
      <H1Element>Partner Company (준비중입니다)</H1Element>
      <DivElement>파트너사 목록 보여주기</DivElement>
    </CompanyContainer>
  );
}

export default PartnerCompany;
