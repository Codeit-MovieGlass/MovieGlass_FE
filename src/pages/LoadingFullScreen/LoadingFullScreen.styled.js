import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

export const LoadingFullScreenContainer = styled.div`
  width: 100vw;
  height: calc(100vh - ${pxToRem(80)});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(32)};
`;

export const LoadingText = styled.span`
  ${({ theme }) => theme.fontStyles.Body1}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Light1};
`;
