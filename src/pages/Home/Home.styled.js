import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const HomeContatiner = styled.div`
  min-width: 1440px;
`;

export const CurationWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(64)} ${pxToRem(64)};
`;
