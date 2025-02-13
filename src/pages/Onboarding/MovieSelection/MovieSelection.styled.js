import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MovieSelectionFrame = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieSelectionModal = styled.div`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(48)} ${pxToRem(72)};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${pxToRem(48)};

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`;

export const MovieSelectionText = styled.h2`
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_White};
  ${({ theme }) => theme.fontStyles.Body1};
`;

export const MovieList = styled.ul`
  width: 100%;
  height: ${pxToRem(580)};
  padding: ${pxToRem(30)} ${pxToRem(30)} 0 ${pxToRem(30)};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: ${pxToRem(78)};

  overflow-y: scroll;

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  &::-webkit-scrollbar {
    width: ${pxToRem(4)};
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 2px;
  }
`;

export const MovieItem = styled.li`
  position: relative;

  width: ${pxToRem(208)};
  height: ${pxToRem(312)};
`;

export const CheckButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);

  width: ${pxToRem(60)};
  height: ${pxToRem(60)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.25);

  ${({ $checked }) =>
    $checked
      ? css`
          background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
          transition: fill 0.2s ease;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
          transition: fill 0.2s ease;
        `}
`;

export const MoviePosterButton = styled.button`
  width: fit-content;
  height: fit-content;
`;

export const MoviePoster = styled.img`
  width: ${pxToRem(208)};
  height: ${pxToRem(312)};

  border-radius: 2px;
`;

// 완료 버튼
export const CompleteButtonContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CompleteButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(16)} ${pxToRem(48)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
  pointer-events: none;

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.MG_Grayscale.White};
    `}

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background: ${theme.colors.MG_Signature.Primary};
      pointer-events: all;
    `}

  &:hover {
    transform: translateX(1px) scale(1.05);
    transition: transform 0.15s ease-in-out;
  }

  transition: transform 0.15s ease-out;
`;
