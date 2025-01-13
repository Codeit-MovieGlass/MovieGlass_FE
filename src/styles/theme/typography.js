import { css } from 'styled-components';

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
    font-size: 60px;
    letter-spacing: 1.2px;
  `,
  Header2: css`
    ${headerBaseFontStyles}
    font-size: 48px;
  `,
  Header3: css`
    ${headerBaseFontStyles}
    font-size: 36px;
  `,
  Header4: css`
    ${headerBaseFontStyles}
    font-size: 24px;
  `,
  Header5: css`
    ${headerBaseFontStyles}
    font-size: 21px;
  `,
  Header6: css`
    ${headerBaseFontStyles}
    font-size: 18px;
  `,
  Header7: css`
    ${headerBaseFontStyles}
    font-size: 14px;
  `,
};

const bodyStyles = {
  Body1: css`
    ${bodyBaseFontStyles}
    font-size: 36px;
  `,
  Body2: css`
    ${bodyBaseFontStyles}
    font-size: 24px;
    letter-spacing: 0.72px;
  `,
  Body3: css`
    ${bodyBaseFontStyles}
    font-size: 21px;
  `,
  Body4: css`
    ${bodyBaseFontStyles}
    font-size: 18px;
    letter-spacing: 0.36px;
  `,
  Body5: css`
    ${bodyBaseFontStyles}
    font-size: 16px;
  `,
  Body6: css`
    ${bodyBaseFontStyles}
    font-size: 14px;
  `,
  Body7: css`
    ${bodyBaseFontStyles}
    font-size: 12px;
  `,
};

const fontStyles = {
  ...headerStyles,
  ...bodyStyles,
};

export default fontStyles;
