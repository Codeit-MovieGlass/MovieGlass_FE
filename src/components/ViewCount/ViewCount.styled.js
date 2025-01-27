import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const ViewCountContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
`;

export const CountBox = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};

  cursor: pointer;
`;

export const SelectedCount = styled.span`
  ${({ theme }) => theme.fontStyles.Body1};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;
