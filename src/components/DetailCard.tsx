import React from 'react';
import { CardInfo } from '../types/infoCardType';

type DetailCardProps = {
  isOpen: boolean;
  closeModal: () => void;
  detailList: CardInfo;
};

function DetailCard({ isOpen, closeModal, detailList }: DetailCardProps) {
  const { title, description, oneLineIntroduce, blogUrl, repositoryUrl, likeCount } = detailList;
  return isOpen ? (
    <div className="modal">
      <div style={{ border: '1px solid blue' }}>
        <div>{title}</div>
        <div>{description}</div>
        <div>{oneLineIntroduce}</div>
        <div>{blogUrl}</div>
        <div>{repositoryUrl}</div>
        <div>{likeCount}</div>
      </div>
      <button onClick={closeModal}>X</button>
    </div>
  ) : null;
}

export default DetailCard;
