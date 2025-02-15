import styled from 'styled-components';

import send from '@assets/svgs/icons/send.svg?react';
import pxToRem from '@utils/pxToRem';

export const Send = styled(send)`
  height: ${pxToRem(60)};
  width: ${pxToRem(60)};

  cursor: pointer;
`;
