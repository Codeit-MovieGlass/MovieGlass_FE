import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import pencilIcon from '@assets/svgs/icons/pencil.svg?react';
import trashIcon from '@assets/svgs/icons/trash.svg?react';

const pencilTrashIconStyles = css`
  width: ${pxToRem(18)};
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  }
`;

export const PencilIcon = styled(pencilIcon)`
  ${pencilTrashIconStyles}
`;

export const TrashIcon = styled(trashIcon)`
  ${pencilTrashIconStyles}
`;

export const PencilIconPurple = styled(pencilIcon)`
  width: ${pxToRem(28)};
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.MG_Signature.Primary};
  }
`;
