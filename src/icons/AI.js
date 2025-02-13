import styled from 'styled-components';

import ai_button from '@assets/svgs/icons/ai-button.svg?react';
import ai_logo from '@assets/svgs/icons/ai-logo.svg?react';
import pxToRem from '@utils/pxToRem';

export const AIButton = styled(ai_button)`
  height: ${pxToRem(130)};
  width: ${pxToRem(130)};

  cursor: pointer;
`;

export const AILogo = styled(ai_logo)`
  display: flex;
  width: ${pxToRem(60)};
  height: fit-content;
`;
