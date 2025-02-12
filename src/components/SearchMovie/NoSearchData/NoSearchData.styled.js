import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const NoSearchDataContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 300px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(32)};
`;

export const SearchMovieText = styled.span`
  ${({ theme }) => theme.fontStyles.H_Regular};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  text-align: center;

  .keyword {
    ${({ theme }) => theme.fontStyles.Header3};
  }
`;

export const BackToHomeLink = styled.a`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const HomeIconBox = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackToHomeText = styled.span`
  ${({ theme }) => theme.fontStyles.Body2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
`;
