import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const BalloonWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(24)} ${pxToRem(120)};
  margin: 0 auto;
  margin-bottom: ${pxToRem(120)};

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(64)};
`;

export const BalloonContainerStyles = css`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;
