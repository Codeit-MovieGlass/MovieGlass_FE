import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const ViewCountDropdownContainer = styled.ul`
  position: absolute;
  top: 130%;
  left: 0;

  width: fit-content;
  height: calc(${pxToRem(75)} * 4);

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  border-radius: 16px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CountItem = styled.li`
  width: ${pxToRem(128)};
  height: ${pxToRem(75)};
  padding: ${pxToRem(24)} 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fontStyles.Body1};
  font-size: ${pxToRem(28)};

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

  transition:
    color 0.1s ease,
    background-color 0.12s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.MG_Grayscale.White};
    background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
  }
`;
