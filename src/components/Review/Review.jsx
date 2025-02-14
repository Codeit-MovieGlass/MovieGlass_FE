import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import MyReviewTitle from './MyReviewTitle/MyReviewTitle';
import Rating from '@components/Rating/Rating';
import EditDeleteButton from '@components/EditDeleteButton/EditDeleteButton';
import QuitOrDeleteModal from '@components/Modal/Quit/QuitOrDeleteModal';

import { EyeIcon } from '@icons/Eye';
import { CommentLogo } from '@icons/Logo';

import * as S from './Review.styled';

const Review = ({ myReview = false, reviewInfos, handleReviewEditing }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModalOpen = () => setIsDeleteModalOpen(true);
  const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

  const deleteModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (deleteModalRef.current && !deleteModalRef.current.contains(event.target)) {
        handleDeleteModalClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.ReviewWrapper>
      <S.ReviewContainer>
        {myReview && <MyReviewTitle />}
        <S.ReviewInfos>
          <S.RatingDateContainer>
            {/* 별점 & 날짜 */}
            {myReview ? (
              <S.MyReviewRatingSpoilerContainer>
                <S.RatingBox>
                  <Rating rating={reviewInfos.rating} />
                  <span>{reviewInfos.rating}/5.0</span>
                </S.RatingBox>
                <S.SpoilerDivider />
                <S.MyReviewSpoilerText>
                  {reviewInfos.spoiler ? '스포일러 있음' : '스포일러 없음'}
                </S.MyReviewSpoilerText>
              </S.MyReviewRatingSpoilerContainer>
            ) : (
              <S.RatingBox>
                <Rating rating={reviewInfos.rating} />
                <span>{reviewInfos.rating}/5.0</span>
              </S.RatingBox>
            )}
            <S.Date>{reviewInfos.date}</S.Date>
          </S.RatingDateContainer>
          {/* 프로필 & 조회수 */}
          {myReview ? (
            <S.EditDeleteButtonContainer>
              <EditDeleteButton
                handleReviewEditing={handleReviewEditing}
                handleDeleteModalOpen={handleDeleteModalOpen}
              />
              {isDeleteModalOpen && (
                <S.QuitOrDeleteModalContainer>
                  <QuitOrDeleteModal
                    type="삭제"
                    topRef={deleteModalRef}
                    handleModalClose={handleDeleteModalClose}
                  />
                </S.QuitOrDeleteModalContainer>
              )}
            </S.EditDeleteButtonContainer>
          ) : (
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
          )}
        </S.ReviewInfos>

        {/* 리뷰 내용 */}
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
  handleReviewEditing: PropTypes.func,
};

export default Review;
