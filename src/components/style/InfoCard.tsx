import React from 'react';
import styled, { css } from 'styled-components';

interface InfoCard {
  size: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const sizeStyle = css<{ size: string }>`
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 300px;
      height: 200px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 500px;
      height: 350px;
    `}
`;
export const InfoCardSection = styled.div<InfoCard>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px 1px gray;
  margin: 20px 2%;

  border-radius: 15%;
  cursor: pointer;
  border: 1px solid lightgray;

  ${sizeStyle}
`;
