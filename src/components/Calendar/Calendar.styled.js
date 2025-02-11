import pxToRem from '@utils/pxToRem';
import styled, { css } from 'styled-components';

export const CalendarContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`;

export const CalendarDayList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
`;

export const CalendarDayItem = styled.li`
  flex: 1;
  padding: ${pxToRem(8)};
  text-align: right;
`;

export const CalendarDay = styled.span`
  ${({ theme }) => theme.fontStyles.Header4}
  color: ${({ theme }) => theme.colors.MG_Signature.Primary};

  color: ${({ $sun, theme }) => $sun && theme.colors.MG_Alert.Info};
  color: ${({ $sat, theme }) => $sat && theme.colors.MG_Alert.Error};
`;

export const CalendarGrid = styled.ul`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  gap: ${pxToRem(8)};
`;

export const CalendarGridItem = styled.li`
  flex: 1;
`;

export const CalendarUnit = styled.div`
  width: 100%;
  aspect-ratio: 168 / 220;
  padding: ${pxToRem(16)};
  text-align: right;

  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};

  ${({ theme }) => theme.fontStyles.Header6}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};

  ${({ $prevNextMonth }) =>
    $prevNextMonth &&
    css`
      color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
    `}

  ${({ $posterUrl, $prevNextMonth }) =>
    $posterUrl &&
    (!$prevNextMonth
      ? css`
          background-image: url('${$posterUrl}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        `
      : css`
          background-image: url('${$posterUrl}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.5) grayscale(0.6);
        `)}
`;
