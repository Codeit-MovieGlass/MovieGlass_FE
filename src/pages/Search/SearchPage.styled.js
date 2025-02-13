import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const SearchPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(48)} ${pxToRem(104)} ${pxToRem(96)};

  display: flex;
  flex-direction: column;
`;
