import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const WelcomeSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(36)};
`;

export const WelcomeText = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(18)};

  span {
    text-align: center;

    ${({ theme }) => theme.fontStyles.Header5};
    color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  }
`;
