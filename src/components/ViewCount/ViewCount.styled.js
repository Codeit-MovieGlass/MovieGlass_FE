import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const ViewCountContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const EyeIconBox = styled.div`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountBox = styled.button`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
`;

export const SelectedCount = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body1};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;
