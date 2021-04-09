import React, { useState } from 'react';
import '../../App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import UserCard from '../../components/card/UserCard';
import { UserInfo } from '../../types/userType';
import { LeftArrow, RightArrow } from '@styled-icons/boxicons-regular';

type NewUserProps = {
  newUser: UserInfo[];
  openModal: () => void;
  getDetailInfo: (cardId: number) => void;
};

const Container = styled.div``;

const StyledStlider = styled(Slider)`
  .slick-list {
    display: flex;
    flex-direction: column;
    margin: 0 7% 0 12%;
    justify-content: space-around;
  }
  .slick-slide {
    position: relative;
  }

  .slick-slide div {
    outline: none;
  }
  .slick-next,
  .slick-prev {
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  .slick-prev::before {
    opacity: 1;
    color: #6c63ff;
    font-size: 50px;
  }
  .slick-prev {
    left: 100px;
    width: 50px;
    height: 50px;
  }

  .slick-next::before {
    opacity: 1;
    color: #6c63ff;
    font-size: 50px;
  }
  .slick-next {
    right: 100px;
    width: 50px;
    height: 50px;
  }
`;

function NewUser({ newUser, getDetailInfo, openModal }: NewUserProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>New User</h2>
      <StyledStlider {...settings}>
        {newUser.map((user, idx) => (
          <div>
            <UserCard
              size={'medium'}
              key={idx}
              cardId={user.cardId}
              profileImage={user.profileImage}
              userName={user.userName}
              oneLineIntroduce={user.oneLineIntroduce}
              stack={user.stack}
              getDetailInfo={getDetailInfo}
              openModal={openModal}
            />
          </div>
        ))}
      </StyledStlider>
    </Container>
  );
}

export default NewUser;
