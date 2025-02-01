import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import eyeIcon from '@assets/svgs/icons/eye.svg?react';

const whiteColorEye = css`
  path {
    fill: ${({ theme }) => theme.colors.MG_Grayscale.White};
  }
`;

export const EyeIcon = styled(eyeIcon)`
  ${whiteColorEye}
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const ViewCountEyeIcon = styled(eyeIcon)`
  ${whiteColorEye}
`;
