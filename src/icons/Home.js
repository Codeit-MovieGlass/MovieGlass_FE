import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import home from '@assets/svgs/icons/home.svg?react';

export const HomeIcon = styled(home)`
  width: ${pxToRem(24)};
  height: fit-content;
`;
