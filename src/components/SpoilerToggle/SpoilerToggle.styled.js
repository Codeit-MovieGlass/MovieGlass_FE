import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import { motion } from 'motion/react';

export const SpoilerToggleWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const SpoilerToggleLabel = styled.label`
  ${({ theme }) => theme.fontStyles.Body4}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

export const SpoilerToggleContainer = styled.div`
  position: relative;

  width: ${pxToRem(64)};
  height: ${pxToRem(30)};
  padding: 0 ${pxToRem(4)};
  border-radius: 16px;

  display: flex;
  justify-content: ${({ $isOn }) => ($isOn ? 'flex-end' : 'flex-start')};
  align-items: center;
  gap: ${pxToRem(4)};

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  transition:
    gap 0.4s ease,
    background-color 0.2s ease-in-out;
  cursor: pointer;

  ${({ $isOn }) =>
    $isOn &&
    css`
      gap: ${pxToRem(8)};
      background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
    `}
`;

export const Toggle = styled(motion.div)`
  width: ${pxToRem(22)};
  height: ${pxToRem(22)};
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const OnOff = styled.span`
  ${({ theme }) => theme.fontStyles.Body6}
`;
