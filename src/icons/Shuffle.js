import styled from 'styled-components';

import shuffleIcon from '@assets/svgs/icons/shuffle.svg?react';
import pxToRem from '@utils/pxToRem';

export const ShuffleIcon = styled(shuffleIcon)`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  #Vector {
    fill: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
  }
`;
