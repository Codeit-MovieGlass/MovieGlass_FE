import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const GenreSelectionContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GenreSelectionFrame = styled.section`
  position: relative;

  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(48)} ${pxToRem(72)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(64)};

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`;

export const GenreSelectionText = styled.h2`
  ${({ theme }) => theme.fontStyles.Body1};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const GenreList = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: ${pxToRem(36)};
`;

export const GenreItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const GenreButton = styled.button`
  width: ${pxToRem(280)};
  height: fit-content;
  padding: ${pxToRem(20)} ${pxToRem(36)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.MG_Signature.Primary};

  ${({ theme }) => theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.MG_Signature.Light1};
  background-color: transparent;

  ${({ $selected }) =>
    $selected
      ? css`
          background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
          color: ${({ theme }) => theme.colors.MG_Grayscale.White};
        `
      : css`
          opacity: 0.6;
        `}

  opacity: ${({ $initial }) => $initial && 1};

  transition: opacity 0.1s ease-out;
`;

export const NextButtonContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NextButton = styled.button`
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.6;
  pointer-events: none;

  ${({ $selected }) =>
    $selected &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  &:hover {
    transform: translateX(3px) scale(1.05);
  }

  transition:
    transform 0.2s ease,
    opacity 0.1s ease-out;
`;
