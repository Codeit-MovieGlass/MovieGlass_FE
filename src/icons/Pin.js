import styled from 'styled-components';

import pinIcon from '@assets/svgs/icons/pin.svg?react';
import pxToRem from '@utils/pxToRem';

export const PinIcon = styled(pinIcon)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;
