import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createCard } from '../../api/CardApi';
import CardInfo from '../../components/CardInfo';
import { RootState } from '../../modules/reducer';

function CreateInfoCard() {
  const state = useSelector((state: RootState) => state.userReducer);
  const history = useHistory();

  const [title, setTitle] = useState<string>('');
  const [oneLineIntroduce, setIntroduce] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [repositoryUrl, setRepositoryUrl] = useState<string>('');
  const [blogUrl, setBlogUrl] = useState<string>('');
  const [inputStack, setInputStack] = useState<string>('');
  const [newstack, setStack] = useState<string[]>([]);

  const handleCardCreate = async () => {
    // TODO : API 요청 보내기
    const { accessToken } = state;
    await createCard(
      {
        title,
        oneLineIntroduce,
        description,
        blogUrl,
        repositoryUrl,
        stack: newstack,
      },
      accessToken
    );
    history.push('/board');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <CardInfo handleInputChange={handleInputChange} inputStack={inputStack} />
      <div style={{ display: 'flex' }}>
        {newstack.map((el, idx) => (
          <p key={idx} style={{ marginRight: '7%' }}>
            {el}
          </p>
        ))}
      </div>
      <button
        style={{ background: 'none', width: '120px', height: '30px', marginTop: '5%' }}
        onClick={handleCardCreate}
      >
        등록하기
      </button>
    </>
  );
}

export default CreateInfoCard;
