const pxToRem = (px) => {
  const maxFontSize = 18;
  return `${px / maxFontSize}rem`;
};

export default pxToRem;
