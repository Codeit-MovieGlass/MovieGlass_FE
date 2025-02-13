import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 102;
`;
