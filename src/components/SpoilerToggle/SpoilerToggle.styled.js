import styled, { css } from 'styled-components';

import { motion } from 'motion/react';

export const SpoilerToggleContainer = styled.div`
  position: relative;

  width: 64px;
  height: 30px;
  padding: 0 4px;
  border-radius: 16px;

  display: flex;
  justify-content: ${({ $isOn }) => ($isOn ? 'flex-end' : 'flex-start')};
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  transition:
    gap 0.4s ease,
    background-color 0.2s ease-in-out;
  cursor: pointer;

  ${({ $isOn }) =>
    $isOn &&
    css`
      gap: 8px;
      background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
    `}
`;

export const Toggle = styled(motion.div)`
  width: 22px;
  height: 22px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const OnOff = styled.span`
  ${({ theme }) => theme.fontStyles.Body6}
`;
