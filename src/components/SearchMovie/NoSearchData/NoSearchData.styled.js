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
