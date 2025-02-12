import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import homeIcon from '@assets/svgs/icons/home.svg?react';

export const HomeIcon = styled(homeIcon)`
  width: ${pxToRem(28)};
  height: ${pxToRem(28)};
  color: #D2D1D2;
`;
