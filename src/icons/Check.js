import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import checkIcon from '@assets/svgs/icons/check.svg?react';

export const CheckIcon = styled(checkIcon)`
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};

  path {
    fill: ${({ $checked, theme }) =>
      $checked ? theme.colors.MG_Grayscale.White : theme.colors.MG_Grayscale.Gray_3};

    transition: fill 0.2s ease;
  }
  transition: fill 0.2s ease;
`;
