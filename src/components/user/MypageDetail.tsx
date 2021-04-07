import React from 'react';
import { CardInfo } from '../../types/infoCardType';

function MypageDetail(props: CardInfo) {
  const { title, oneLineIntroduce, repositoryUrl, blogUrl, description, stack } = props;
  return (
    <div>
      <div>마이페이지 카드영역 </div>
      <div
        className="boxcont"
        style={{ border: '1px solid black', width: '500px', height: '450px', borderRadius: '15%' }}
      >
        <div>
          <div>{title}</div>
          <div>{oneLineIntroduce}</div>
          <div>{repositoryUrl}</div>
          <div>{blogUrl}</div>
          <div>{description}</div>
          {stack?.map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MypageDetail;
