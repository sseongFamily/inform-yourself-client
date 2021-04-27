import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createCard } from '../../api/CardApi';
import CardInfo from '../../components/card/CardInfo';
import { RootState } from '../../modules/reducer';
import { userCreateCard } from '../../modules/user';
import styled from 'styled-components';

const ButtonElement = styled.button`
  width: 20%;
  height: 50px;
  border: none;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #6c63ff;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.5s;

  &:hover {
    background-color: #e6e6ef;
    color: #6c63ff;
    transition: 0.7s;
  }
`;

function CreateInfoCard() {
  const state = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState<string>('');
  const [oneLineIntroduce, setIntroduce] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [repositoryUrl, setRepositoryUrl] = useState<string>('');
  const [blogUrl, setBlogUrl] = useState<string>('');
  const [inputStack, setInputStack] = useState<string>('');
  const [newstack, setStack] = useState<string[]>([]);

  useEffect(() => {
    console.log(newstack);
  }, [newstack]);

  const handleRemoveStack = (deleteStack: string): void => {
    const modifyStack = newstack.filter((stack) => {
      return stack !== deleteStack;
    });
    setStack(modifyStack);
  };

  const handleCardCreate = async () => {
    // TODO : API 요청 보내기

    const result = await createCard({
      title,
      oneLineIntroduce,
      description,
      blogUrl,
      repositoryUrl,
      stack: newstack,
    });
    dispatch(userCreateCard(result));
    history.push('/infocard');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'title':
        return setTitle(e.target.value);
      case 'oneLine':
        return setIntroduce(e.target.value);
      case 'description':
        return setDescription(e.target.value);
      case 'repositoryUrl':
        return setRepositoryUrl(e.target.value);
      case 'blogUrl':
        return setBlogUrl(e.target.value);
      case 'newstack': {
        if (e.target.value.includes(',')) {
          setStack(newstack.concat(`${e.target.value.slice(0, -1)}`));
          e.target.value = '';
        }
        return setInputStack(e.target.value);
      }
      default:
        return;
    }
  };
  return (
    <>
      <CardInfo
        handleInputChange={handleInputChange}
        inputStack={inputStack}
        newstack={newstack}
        handleRemoveStack={handleRemoveStack}
      />
      <ButtonElement onClick={handleCardCreate}>등록하기</ButtonElement>
    </>
  );
}

export default CreateInfoCard;
