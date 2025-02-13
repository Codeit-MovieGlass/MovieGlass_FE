import styled from 'styled-components';
import { BalloonContainerStyles } from '../BalloonSection.styled';

export const TextBalloonContainer = styled.div`
  ${BalloonContainerStyles}
`;

export const BallonText = styled.span`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
  ${({ theme }) => theme.fontStyles.Body1};
`;
