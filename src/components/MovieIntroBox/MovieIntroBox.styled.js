import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MovieIntroBoxContainer = styled.div`
  position: absolute;
  bottom: 8%;
  right: -20%;
  z-index: 10;

  width: ${pxToRem(320)};
  height: fit-content;
  padding: ${pxToRem(20)};

  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  user-select: none;
  -webkit-user-select: none;

  ${({ $isRendered }) =>
    $isRendered
      ? css`
          opacity: 1;
          transition: opacity 0.2s ease-in;
        `
      : css`
          opacity: 0;
          transition: opacity 0.2s ease-out;
        `}
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fontStyles.Body2};
  font-weight: 700;
  letter-spacing: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GenreKeywordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};

  white-space: nowrap;
  overflow: hidden;
`;

export const GenresBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${pxToRem(4)};

  ${({ theme }) => theme.fontStyles.Body4};
  font-weight: 700;
  letter-spacing: 0;
`;

export const KeywordBox = styled(GenresBox)``;
