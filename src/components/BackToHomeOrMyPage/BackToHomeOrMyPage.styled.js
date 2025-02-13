import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

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
  ${({ theme }) => theme.fontStyles.Body3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
`;
