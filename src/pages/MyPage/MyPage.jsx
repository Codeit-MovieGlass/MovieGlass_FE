import { LikeIcon, ReviewIcon, SettingsIcon } from '@icons/MyPage';
import { PencilIconPurple } from '@icons/EditDelete';

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
      {/* Header */}
      <S.MyPageHeader>
        <S.ProfileImageContainer>
          <S.ProfileImage src={profileInfos.image} alt="Profile Image" />
        </S.ProfileImageContainer>
        <S.ProfileInfoSection>
          <S.ProfileNameContainer>
            <S.ProfileName>{profileInfos.name}</S.ProfileName>
            <S.ProfileEditSettingsContainer>
              <S.EditButton>
                <PencilIconPurple />
              </S.EditButton>
              <S.SettingsButton>
                <SettingsIcon />
              </S.SettingsButton>
            </S.ProfileEditSettingsContainer>
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

      {/* Calendar */}
      <S.CalenaderContainer>
        <S.CalendarTitle>캘린더</S.CalendarTitle>
      </S.CalenaderContainer>
    </S.MyPageContainer>
  );
};

export default Mypage;
