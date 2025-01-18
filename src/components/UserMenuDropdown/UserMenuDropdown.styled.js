import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: ${pxToRem(60)};
  right: 0;
  z-index: 100;

  width: ${pxToRem(200)};
  height: fit-content;
  padding: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
`;

export const OptionList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Options = styled.li`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  ${({ theme }) => theme.fontStyles.Body4}

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
    transition: background-color 0.1s ease;
  }
`;
