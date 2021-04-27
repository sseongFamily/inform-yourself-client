import React, { useState } from 'react';
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
  const [newTitle, setTitle] = useState<string>(title);
  const [newDescription, setDescription] = useState<string>(description);
  const [newRepositoryUrl, setRepo] = useState<string>(repositoryUrl);
  const [newBlogUrl, setBlog] = useState<string>(blogUrl);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'repo':
        setRepo(e.target.value);
        break;
      case 'blog':
        setBlog(e.target.value);
        break;
      default:
        break;
    }
  };
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
      <MypageInput type="text" value={newTitle} name={'title'} onChange={inputChange} />
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Introduce</h2>
      <MypageInput type="text" value={newDescription} name={'description'} onChange={inputChange} />
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Rpository URL</h2>
      <MypageInput type="text" value={newRepositoryUrl} name={'repo'} onChange={inputChange} />
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Blog URL</h2>
      <MypageInput type="text" value={newBlogUrl} name={'blog'} onChange={inputChange} />
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
      <DetailInfo>{newTitle}</DetailInfo>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Introduce</h2>
      <DetailInfo>{newDescription}</DetailInfo>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Rpository URL</h2>
      <DetailInfo>{newRepositoryUrl}</DetailInfo>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '2%' }}>Blog URL</h2>
      <DetailInfo>{newBlogUrl}</DetailInfo>
    </div>
  );
}

export default MypageDetail;
