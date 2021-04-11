import React from 'react';
import { CardInfo } from '../../types/infoCardType';
import styled from 'styled-components';

interface buttonClick {
  modifyAndSave: () => void;
  check: boolean;
}
const DetailInfo = styled.div`
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 5%;
  box-shadow: 1px 1px 3px 1px lightgray;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px;
  & + & {
    margin-bottom: 20px;
  }
`;

const MypageInput = styled.input`
  width: 450px;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  margin-bottom: 2%;
`;
function MypageDetail(props: CardInfo) {
  const { title, repositoryUrl, blogUrl, description, modify } = props;
  return modify ? (
    <div
      className="boxcont"
      style={{
        boxSizing: 'border-box',
        boxShadow: '1px 1px 3px 1px #6c63ff',
        width: '500px',
        height: '450px',
        borderRadius: '15%',
        margin: '20px 2%',
        padding: '5%',
      }}
    >
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '3% 0' }}>Title</h2>
      <MypageInput type="text" value={title} />
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Introduce</h2>
      <MypageInput type="text" value={description} />
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Rpository URL</h2>
      <MypageInput type="text" value={repositoryUrl} />
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Blog URL</h2>
      <MypageInput type="text" value={blogUrl} />
    </div>
  ) : (
    <div
      className="boxcont"
      style={{
        boxSizing: 'border-box',
        boxShadow: '1px 1px 3px 1px #6c63ff',
        width: '500px',
        height: '450px',
        borderRadius: '15%',
        margin: '20px 2%',
        padding: '5%',
      }}
    >
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Title</h2>
      <DetailInfo>{title}</DetailInfo>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Introduce</h2>
      <DetailInfo>{description}</DetailInfo>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Rpository URL</h2>
      <DetailInfo>{repositoryUrl}</DetailInfo>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Blog URL</h2>
      <DetailInfo>{blogUrl}</DetailInfo>
    </div>
  );
}

export default MypageDetail;
