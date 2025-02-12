import styled from 'styled-components';
import home from '@assets/svgs/icons/home.svg?react';
import pxToRem from '@utils/pxToRem';

export const HomeIcon = styled(home)`
  width: ${pxToRem(28)};
  height: fit-content;
`;
