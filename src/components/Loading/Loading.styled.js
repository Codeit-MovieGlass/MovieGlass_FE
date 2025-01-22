import styled, { keyframes } from 'styled-components';

// Loading 전역 변수
const loading = {
  boxSize: '150px',
  ballColor: '#7E37F9',
  ballSpeed: '0.8s',
};

// Keyframes 정의
const jump = keyframes`
  0% {
    transform: translateY(0px);
  }

  30% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }

  50% {
    transform: translateY(-100%);
    animation-timing-function: ease-in;
  }

  75% {
    transform: translate(0px);
    animation-timing-function: ease-in;
  }
`;

const morph = keyframes`
    0% {
        transform: scaleY(1);
    }

    10% {
        transform: scaleY(1);
    }

    20%, 25% {
        transform: scaleY(0.7) scaleX(1.3);
    }

    30% {
        transform: scaleY(1.1) scaleX(0.9);
    }

    40% {
        transform: scaleY(1);
    }

    70%, 85%, 100% {
        transform: scaleY(1);
    }

    75% {
        transform: scaleY(0.8) scaleX(1.2);
    }
`;

export const LoadingContainer = styled.div`
  width: ${loading.boxSize};
  height: calc(${loading.boxSize} * 0.4);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LoadingBall = styled.div`
  width: calc(${loading.boxSize}* 0.2);
  height: calc(${loading.boxSize} * 0.2);
  flex-shrink: 0;

  animation: ${jump} ${loading.ballSpeed} ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: calc(${loading.ballSpeed} * -0.2);

    .inner {
      animation-delay: calc(${loading.ballSpeed} * -0.2);
    }
  }

  &:nth-child(3) {
    animation-delay: calc(${loading.ballSpeed} * -0.4);

    .inner {
      animation-delay: calc(${loading.ballSpeed} * -0.4);
    }
  }
`;

export const BallInner = styled.div`
  width: 100%;
  height: 100%;

  display: block;

  transform-origin: center bottom;
  animation: ${morph} ${loading.ballSpeed} ease-in-out infinite;

  border-radius: 25%;
  background-color: ${loading.ballColor};
`;
