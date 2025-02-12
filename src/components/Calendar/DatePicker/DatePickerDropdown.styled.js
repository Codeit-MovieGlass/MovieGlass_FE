import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const DatePickerDropdownList = styled.ul`
  position: absolute;
  top: 120%;
  left: 0;

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
`;

export const DatePickerDropdownItem = styled.li`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DatePickerButton = styled.button`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(16)} 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  ${({ theme }) => theme.fontStyles.Header7}
  color: ${({ theme }) => theme.colors.MG_Signature.Primary_Light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
  }
`;
