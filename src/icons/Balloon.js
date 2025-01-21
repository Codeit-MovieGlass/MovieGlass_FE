import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import textBalloon from '@assets/svgs/icons/textBalloon.svg?react';
import emojiBalloon from '@assets/svgs/icons/emojiBalloon.svg?react';

export const MessageBalloonIcon = styled(textBalloon)`
  width: ${pxToRem(640)};
`;

export const EmojiBalloonIcon = styled(emojiBalloon)`
  width: ${pxToRem(548)};

  path {
    fill: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  }
`;
