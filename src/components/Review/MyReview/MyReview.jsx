import Review from '@components/Review/Review';

import { PinIcon } from '@icons/Pin';
import { PencilIcon, TrashIcon } from '@icons/EditDelete';

import * as S from './MyReview.styled';

const MyReview = () => {
  return (
    <S.MyReviewContainer>
      <S.MyReviewHeader>
        <S.MyReviewTitleContainer>
          <PinIcon />
          <S.MyReviewTitle>내가 남긴 리뷰</S.MyReviewTitle>
        </S.MyReviewTitleContainer>
        <S.EditDeleteContainer>
          <S.EditButton>
            <span>수정</span>
            <PencilIcon />
          </S.EditButton>
          <S.DeleteButton>
            <span>삭제</span> <TrashIcon />
          </S.DeleteButton>
        </S.EditDeleteContainer>
      </S.MyReviewHeader>

      {/* 댓글 컴포넌트 재사용 */}
      <Review />
    </S.MyReviewContainer>
  );
};

export default MyReview;
