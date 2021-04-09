import React, { useEffect } from 'react';
import styled from 'styled-components';

interface CardProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleRemoveStack: (deleteStack: string) => void;
  inputStack: string;
  newstack: string[];
}

const ExitButton = styled.button`
  display: none;
  border: none;
  font-size: 10px;
  margin: -3px -5px 0 5px;
  border-radius: 0.75rem;
  background: rgb(241, 243, 245);
`;

const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  padding: 0 0.75rem;
  margin: 0 0.5rem;
  background: rgb(241, 243, 245);
  &:hover {
    ${ExitButton} {
      display: inline;
    }
  }
`;

function CardInfo(props: CardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '1px 1px 3px 1px gray',
        borderRadius: '5%',
        padding: '20px',
      }}
    >
      <input
        style={{
          width: '1000px',
          height: '35px',
          border: 'none',
          paddingTop: '10px',
          fontSize: '50px',
        }}
        type="text"
        name="title"
        placeholder="Title "
        onChange={props.handleInputChange}
      />
      <div
        style={{
          background: 'rgb(73, 80, 87)',
          height: '4px',
          width: '6rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          borderRadius: '1px',
        }}
      ></div>
      <input
        style={{
          width: '1000px',
          height: '35px',
          fontSize: '25px',
          border: 'none',
        }}
        type="text"
        name="oneLine"
        placeholder="OneLine Introduce "
        onChange={props.handleInputChange}
      />
      <div
        style={{
          background: 'rgb(73, 80, 87)',
          height: '4px',
          width: '13rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          borderRadius: '1px',
        }}
      ></div>
      <textarea
        style={{
          width: '1000px',
          height: '300px',
          fontSize: '25px',
          border: 'none',
          borderBottomWidth: 'thick',
          resize: 'none',
          outline: 'none',
        }}
        name="description"
        placeholder="Description "
        onChange={props.handleInputChange}
      />
      <div
        style={{
          background: 'rgb(73, 80, 87)',
          height: '4px',
          width: '13rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          borderRadius: '1px',
        }}
      ></div>
      <input
        style={{
          width: '1000px',
          height: '35px',
          fontSize: '20px',
          border: 'none',
        }}
        type="text"
        name="repositoryUrl"
        placeholder="Repository URL "
        onChange={props.handleInputChange}
      />
      <div
        style={{
          background: 'rgb(73, 80, 87)',
          height: '4px',
          width: '9rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          borderRadius: '1px',
        }}
      ></div>
      <input
        style={{
          width: '1000px',
          height: '35px',
          fontSize: '20px',
          border: 'none',
        }}
        type="text"
        name="blogUrl"
        placeholder="Blog URL "
        onChange={props.handleInputChange}
      />
      <div
        style={{
          background: 'rgb(73, 80, 87)',
          height: '4px',
          width: '6rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          borderRadius: '1px',
        }}
      ></div>
      <input
        style={{
          width: '1000px',
          height: '35px',
          fontSize: '20px',
          border: 'none',
        }}
        type="text"
        name="newstack"
        placeholder="Stack"
        onChange={props.handleInputChange}
      />
      <div
        style={{
          background: 'rgb(73, 80, 87)',
          height: '4px',
          width: '6rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          borderRadius: '1px',
        }}
      ></div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {props.newstack.map((el, idx) => (
          <p key={idx}>
            <Stack>
              {el}
              <ExitButton
                onClick={() => {
                  props.handleRemoveStack(props.newstack[idx]);
                }}
              >
                ❌
              </ExitButton>
            </Stack>
          </p>
        ))}
      </div>
    </div>
  );
}

export default CardInfo;
