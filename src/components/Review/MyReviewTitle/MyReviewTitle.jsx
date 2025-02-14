import { PinIcon } from '@icons/Pin';

import * as S from './MyReviewTitle.styled';

const MyReviewTitle = () => {
  return (
    <S.MyReviewTitleContainer>
      <PinIcon />
      <S.MyReviewTitleText>내가 남긴 리뷰</S.MyReviewTitleText>
    </S.MyReviewTitleContainer>
  );
};

export default MyReviewTitle;
