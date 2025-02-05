import { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

const headerBaseFontStyles = css`
  font-family: 'NEXON Lv2 Gothic';
  font-weight: 700;
  line-height: 100%;
`;

const bodyBaseFontStyles = css`
  font-family: 'Pretendard Variable';
  font-weight: 500;
  line-height: 100%;
`;

const headerStyles = {
  Header1: css`
    ${headerBaseFontStyles}
    font-size: ${pxToRem(60)};
    letter-spacing: 1.2px;
  `,
  Header2: css`
    ${headerBaseFontStyles}
    font-size: ${pxToRem(48)};
  `,
  Header3: css`
    ${headerBaseFontStyles}
    font-size: ${pxToRem(36)};
  `,
  Header4: css`
    ${headerBaseFontStyles}
    font-size: ${pxToRem(24)};
  `,
  Header5: css`
    ${headerBaseFontStyles}
    font-size: ${pxToRem(21)};
  `,
  Header6: css`
    ${headerBaseFontStyles}
    font-size: ${pxToRem(18)};
  `,
  Header7: css`
    ${headerBaseFontStyles}
    font-size: ${pxToRem(14)};
  `,
};

const bodyStyles = {
  Body1: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(36)};
  `,
  Body2: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(24)};
    letter-spacing: 0.72px;
  `,
  Body3: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(21)};
  `,
  Body4: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(18)};
    letter-spacing: 0.36px;
  `,
  Body5: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(16)};
  `,
  Body6: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(14)};
  `,
  Body7: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(12)};
  `,
};

const ExtraStyles = {
  P_48: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(48)};
  `,
  P_40: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(40)};
  `,
  P_ai: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(36)};
    font-weight: 900;
  `,
  Rank_Main: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(200)};
    font-weight: 900;
  `,
  Rank_Side: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(96)};
    font-weight: 900;
  `,
  H_Regular: css`
    ${bodyBaseFontStyles}
    font-size: ${pxToRem(36)};
    font-weight: 400;
  `,
};

const fontStyles = {
  ...headerStyles,
  ...bodyStyles,
  ...ExtraStyles,
};

export default fontStyles;
