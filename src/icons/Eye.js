import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import eyeIcon from '@assets/svgs/icons/eye.svg?react';

export const EyeIcon = styled(eyeIcon)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  path {
    fill: ${({ theme }) => theme.colors.MG_Grayscale.White};
  }
`;
