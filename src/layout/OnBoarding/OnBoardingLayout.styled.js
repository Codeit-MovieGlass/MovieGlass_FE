import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const OnBoardingLayoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(96)};
`;
