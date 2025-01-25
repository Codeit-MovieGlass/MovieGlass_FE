import { useEffect, useState } from 'react';

import RatingInput from '@components/RatingInput/RatingInput';
import SpoilerToggle from '@components/SpoilerToggle/SpoilerToggle';

import * as S from './WriteReview.styled';

const WriteReview = () => {
  const [review, setReview] = useState('');
  const [reviewByteCount, setReviewByteCount] = useState(0);
  const [isReviewFocused, setIsReviewFocused] = useState(false);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewFocus = () => setIsReviewFocused(true);
  const handleReviewBlur = () => setIsReviewFocused(false);

  const calculateBytes = (text) => {
    return new Blob([text]).size;
  };

  useEffect(() => {
    setReviewByteCount(calculateBytes(review));
  }, [review]);

  return (
    <S.WriteReviewForm>
      <S.RatingSpoilerContainer>
        <RatingInput />
        <SpoilerToggle />
      </S.RatingSpoilerContainer>
      <S.TextareaContainer>
        <S.ReviewTextArea
          value={review}
          onChange={handleReviewChange}
          onFocus={handleReviewFocus}
          onBlur={handleReviewBlur}
          $isFocused={isReviewFocused}
          placeholder="이 작품에 대한 의견을 자유롭게 남겨주세요."
        />
        <S.ReviewByteCount $isFocused={isReviewFocused}>
          {reviewByteCount}/500 byte
        </S.ReviewByteCount>
      </S.TextareaContainer>

      <S.SubmitReviewButton>작성하기</S.SubmitReviewButton>
    </S.WriteReviewForm>
  );
};

export default WriteReview;
