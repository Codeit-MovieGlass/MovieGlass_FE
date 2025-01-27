import styled from 'styled-components';

import pencilIcon from '@assets/svgs/icons/pencil.svg?react';
import trashIcon from '@assets/svgs/icons/trash.svg?react';
import pxToRem from '@utils/pxToRem';

export const PencilIcon = styled(pencilIcon)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const TrashIcon = styled(trashIcon)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;
