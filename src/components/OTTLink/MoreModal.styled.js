import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MoreModalContainer = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;

  width: fit-content;
  height: fit-content;
  padding: 4px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const MoreModalItem = styled.li`
  height: ${pxToRem(40)};
  padding: 0 ${pxToRem(24)};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.fontStyles.Body4}
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;

  transition:
    color 0.08s,
    background-color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.colors.MG_Grayscale.White};
    background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
  }
`;
