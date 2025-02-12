import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

export const AccountDropdownList = styled.ul`
  position: absolute;
  top: 115%;
  right: 10%;

  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(8)};

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
  box-shadow: 2px 2px 16px 2px rgba(255, 255, 255, 0.08);
`;

export const AccountDropdownItem = styled.li`
  width: ${pxToRem(240)};
  height: fit-content;
`;

export const AccountDropdownItemLink = styled.a`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(12)} ${pxToRem(28)};

  display: flex;
  align-items: center;

  border-radius: 8px;

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: transparent;

  &:hover {
    background-color: ${({ $isQuit, theme }) =>
      $isQuit ? theme.colors.MG_Alert.Error : theme.colors.MG_Grayscale.Gray_3};
  }

  transition: background-color 0.05s ease-out;
`;
