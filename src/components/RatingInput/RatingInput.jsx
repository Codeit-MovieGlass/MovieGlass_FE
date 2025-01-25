import { useState } from 'react';

import * as S from './RatingInput.styled';

const RatingInput = () => {
  const TOTAL_RATING = 5;

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const getClipPathPercent = (starIndex, value) => {
    if (starIndex <= value) return 0;
    return starIndex - value === 0.5 ? 50 : 100;
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const boxWidth = rect.width;
    const fillWidth = e.clientX - rect.left;

    const value = Math.ceil((fillWidth / boxWidth) * TOTAL_RATING * 2) / 2;
    const hoveredRating = Math.min(Math.max(value, 0.5), TOTAL_RATING);

    setHoveredRating(hoveredRating);
  };

  const fixRating = () => {
    if (hoveredRating === 0) return;
    setRating(hoveredRating);
  };

  const resetRating = () => {
    setHoveredRating(0);
  };

  return (
    <S.RatingWrapper>
      <S.RatingInputContainer
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRating}
        onClick={fixRating}
      >
        {Array.from({ length: TOTAL_RATING }).map((_, index) => {
          const fillPercentage = getClipPathPercent(index + 1, hoveredRating || rating);

          return (
            <S.StarContainer key={index} $isFilled={fillPercentage < 100}>
              <S.EmptyStar />
              <S.FilledStar style={{ clipPath: `inset(0 ${fillPercentage}% 0 0)` }} />
            </S.StarContainer>
          );
        })}
      </S.RatingInputContainer>
      <S.RatingLabel>
        <span>{rating.toFixed(1)}</span>/5.0 점
      </S.RatingLabel>
    </S.RatingWrapper>
  );
};

export default RatingInput;
