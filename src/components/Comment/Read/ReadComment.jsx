import Rating from '@components/Rating/Rating';
import * as S from './ReadComment.styled';
import { EyeIcon } from '@icons/Eye';
import { CommentLogo } from '@icons/Logo';

const ReadComment = () => {
  // 추후 API 연동 시 받아와야할 데이터
  const rating = 3.5;
  const date = '2025.01.16';
  const username = '칠가이';
  const userID = 'ChillGuy_01';
  const view = 5;
  const comment =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  return (
    <S.Padding>
      <S.ReadCommentContainer>
        <S.CommentInfos>
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
        </S.CommentInfos>
        <S.CommentContent>{comment}</S.CommentContent>
        <S.CommentDivider />
      </S.ReadCommentContainer>
    </S.Padding>
  );
};

export default ReadComment;
