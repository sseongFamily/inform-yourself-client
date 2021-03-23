import React from 'react';
import SloganImage from '../../images/slogan_bg.svg';
function Intro() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column-reverse',
          width: '50%',
          height: '60%',
          margin: '0 5%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${SloganImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.5',
          }}
        ></div>
        <h2
          style={{
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '36px',
            color: '#black',
            zIndex: 1,
          }}
        >
          당신을 알리고 싶다면 지금 시작하세요 !
        </h2>
      </div>
      <div style={{ width: '50%', height: '60%', margin: '0 5%' }}>gif 들어갈 영역</div>
    </div>
  );
}

export default Intro;
