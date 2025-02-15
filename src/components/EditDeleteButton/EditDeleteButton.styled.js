import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const EditDeleteContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(24)};
`;

const editDeleteButtonStyles = css`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};

  ${({ theme }) => theme.fontStyles.Body3}
  font-weight: 700;

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  white-space: nowrap;
`;

export const EditButton = styled.button`
  ${editDeleteButtonStyles}
`;

export const DeleteButton = styled.button`
  ${editDeleteButtonStyles}
`;
