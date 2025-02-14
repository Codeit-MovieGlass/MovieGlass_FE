import PropTypes from 'prop-types';

import Rating from '@components/Rating/Rating';

import { EyeIcon } from '@icons/Eye';
import { CommentLogo } from '@icons/Logo';

import * as S from './Review.styled';

const Review = ({ myReview = false, reviewInfos }) => {
  return (
    <S.ReviewWrapper>
      <S.ReviewContainer>
        <S.ReviewInfos>
          <S.RatingDateContainer>
            <S.RatingBox>
              <Rating rating={reviewInfos.rating} />
              <span>{reviewInfos.rating}/5.0</span>
            </S.RatingBox>
            <S.Date>{reviewInfos.date}</S.Date>
          </S.RatingDateContainer>
          <S.ProfileViewContainer>
            <S.UsernameViewBox>
              <S.Username>
                {reviewInfos.username} <span className="user-id">| {reviewInfos.userId}</span>
              </S.Username>
              <S.ViewBox>
                <EyeIcon />
                {reviewInfos.view}
              </S.ViewBox>
            </S.UsernameViewBox>
            <S.ProfileImageBox>
              <CommentLogo />
            </S.ProfileImageBox>
          </S.ProfileViewContainer>
        </S.ReviewInfos>
        {myReview ? (
          <S.MyReviewBorderHighlight>
            <S.ReviewContent>{reviewInfos.comment}</S.ReviewContent>
          </S.MyReviewBorderHighlight>
        ) : (
          <S.ReviewContent>{reviewInfos.comment}</S.ReviewContent>
        )}
      </S.ReviewContainer>
      <S.ReviewDivider />
    </S.ReviewWrapper>
  );
};

Review.propTypes = {
  myReview: PropTypes.bool,
  reviewInfos: PropTypes.shape({
    username: PropTypes.string,
    userId: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    view: PropTypes.number,
    spoiler: PropTypes.bool,
    comment: PropTypes.string,
  }),
};

export default Review;
