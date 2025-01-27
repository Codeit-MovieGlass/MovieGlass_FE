import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import pinIcon from '@assets/svgs/icons/pin.svg?react';

export const PinIcon = styled(pinIcon)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;
