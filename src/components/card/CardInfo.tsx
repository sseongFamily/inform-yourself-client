import React from 'react';

interface CardProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputStack: string;
}

function CardInfo(props: CardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        style={{
          width: '500px',
          height: '50px',
        }}
        type="text"
        name="title"
        placeholder="Title "
        onChange={props.handleInputChange}
      />
      <input
        style={{
          width: '500px',
          height: '50px',
        }}
        type=""
        name="oneLine"
        placeholder="OneLine Introduce "
        onChange={props.handleInputChange}
      />
      <input
        style={{
          width: '500px',
          height: '50px',
        }}
        type=""
        name="description"
        placeholder="Description "
        onChange={props.handleInputChange}
      />
      <input
        style={{
          width: '500px',
          height: '50px',
        }}
        type="text"
        name="repositoryUrl"
        placeholder="Repository URL "
        onChange={props.handleInputChange}
      />
      <input
        style={{
          width: '500px',
          height: '50px',
        }}
        type="text"
        name="blogUrl"
        placeholder="Blog URL "
        onChange={props.handleInputChange}
      />
      <input
        style={{
          width: '500px',
          height: '50px',
        }}
        type="text"
        name="newstack"
        placeholder="Stack"
        onChange={props.handleInputChange}
      />
    </div>
  );
}

export default CardInfo;
