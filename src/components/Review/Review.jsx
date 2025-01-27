import Rating from '@components/Rating/Rating';

import { EyeIcon } from '@icons/Eye';
import { CommentLogo } from '@icons/Logo';

import * as S from './Review.styled';

const Review = () => {
  // 추후 API 연동 시 받아와야할 데이터
  const myUserID = 'ChillGuy_01'; // 현재 로그인된 유저의 ID (userID(username)과 동일할 때, 최상단에 내가 작성한 리뷰로 렌더링)
  const rating = 3.5;
  const date = '2025.01.16';
  const username = '칠가이';
  const userID = 'ChillGuy_01';
  const view = 5;
  const comment =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  return (
    <S.ReviewContainer>
      <S.ReviewInfos>
        <S.RatingDateContainer>
          <S.RatingBox>
            <Rating rating={rating} />
            <span>{rating}/5.0</span>
          </S.RatingBox>
          <S.Date>{date}</S.Date>
        </S.RatingDateContainer>
        <S.ProfileViewContainer>
          <S.UsernameViewBox>
            <S.Username>
              {username} <span className="user-id">| {userID}</span>
            </S.Username>
            <S.ViewBox>
              <EyeIcon />
              {view}
            </S.ViewBox>
          </S.UsernameViewBox>
          <S.ProfileImage>
            <CommentLogo />
          </S.ProfileImage>
        </S.ProfileViewContainer>
      </S.ReviewInfos>
      {myUserID === userID ? (
        <S.MyReviewBorderHighlight>
          <S.ReviewContent>{comment}</S.ReviewContent>
        </S.MyReviewBorderHighlight>
      ) : (
        <S.ReviewContent>{comment}</S.ReviewContent>
      )}

      <S.ReviewDivider />
    </S.ReviewContainer>
  );
};

export default Review;
