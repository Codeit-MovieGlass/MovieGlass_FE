import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const ReviewSortOptionList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const ReviewSortOptionItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const ReviewSortOptionButton = styled.button`
  position: relative;

  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(12)};

  display: flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;

  ${({ theme }) => theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.MG_Signature.Primary};
      font-weight: 600;
    `}

  transition: color 0.18s ease, font-weight 0.15s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => ($isActive ? '60%' : '0px')};
    height: 3px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
    transition: width 0.18s ease;
  }
`;
