import { LikeIcon, ReviewIcon } from '@icons/MyPage';

import defaultProfile from '@assets/images/profile.jpg';

import * as S from './MyPage.styled';

const profileInfos = {
  image: defaultProfile,
  name: '김철흥',
  email: 'keaikim77@gmail.com',
};

const Mypage = () => {
  return (
    <S.MyPageContainer>
      <S.MyPageHeader>
        <S.ProfileImageContainer>
          <S.ProfileImage src={profileInfos.image} alt="Profile Image" />
        </S.ProfileImageContainer>
        <S.ProfileInfoSection>
          <S.ProfileNameContainer>
            <S.ProfileName>{profileInfos.name}</S.ProfileName>
          </S.ProfileNameContainer>
          <S.ProfileEmail>{profileInfos.email}</S.ProfileEmail>
          <S.ReviewLikeButtonContainer>
            <S.MyReviewLink to="review">
              <ReviewIcon />
            </S.MyReviewLink>
            <S.MyLikeLink to="like">
              <LikeIcon />
            </S.MyLikeLink>
          </S.ReviewLikeButtonContainer>
        </S.ProfileInfoSection>
      </S.MyPageHeader>
    </S.MyPageContainer>
  );
};

export default Mypage;
