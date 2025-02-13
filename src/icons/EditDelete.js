import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import pencilIcon from '@assets/svgs/icons/pencil.svg?react';
import trashIcon from '@assets/svgs/icons/trash.svg?react';

export const PencilIcon = styled(pencilIcon)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const PencilIconPurple = styled(pencilIcon)`
  width: ${pxToRem(28)};
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.MG_Signature.Primary};
  }
`;

export const TrashIcon = styled(trashIcon)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;
