import { useEffect, useRef, useState } from 'react';

import Calendar from '@components/Calendar/Calendar';
import DatePickerDropdown from '@components/Calendar/DatePicker/DatePickerDropdown';

import { LikeIcon, ReviewIcon, SettingsIcon } from '@icons/MyPage';
import { PencilIconPurple } from '@icons/EditDelete';
import { DatePickerArrow } from '@icons/Arrow';

import defaultProfile from '@assets/images/profile.jpg';

import * as S from './MyPage.styled';

const Mypage = () => {
  const profileInfos = {
    image: defaultProfile,
    name: '김철흥',
    email: 'keaikim77@gmail.com',
  };

  const yearList = ['2023', '2024', '2025'];
  const monthList = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const [selectedYear, setSelectedYear] = useState(yearList[0]);
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);

  const handleSelectYear = (year) => setSelectedYear(year);
  const handleYearPicker = () => setIsYearPickerOpen(!isYearPickerOpen);

  const [selectedMonth, setSelectedMonth] = useState(monthList[0]);
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

  const handleSelectMonth = (month) => setSelectedMonth(month);
  const handleMonthPicker = () => setIsMonthPickerOpen(!isMonthPickerOpen);

  const yearDropdownRef = useRef(null);
  const monthDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(e.target)) {
        setIsYearPickerOpen(false);
      }

      if (monthDropdownRef.current && !monthDropdownRef.current.contains(e.target)) {
        setIsMonthPickerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        {/* Date Picker */}
        <S.DatePickContainer>
          <S.YearPickerContainer ref={yearDropdownRef}>
            <S.YearPickerButton onClick={handleYearPicker}>
              {selectedYear}
              <S.DatePickerArrowBox>
                <DatePickerArrow />
              </S.DatePickerArrowBox>
            </S.YearPickerButton>
            {isYearPickerOpen && (
              <DatePickerDropdown
                yearOrMonthList={yearList}
                handleSelectYearOrMonth={handleSelectYear}
                handleDropdownClose={handleYearPicker}
              />
            )}
          </S.YearPickerContainer>

          <S.MonthPickerContainer ref={monthDropdownRef}>
            <S.MonthPickerButton onClick={handleMonthPicker}>
              {selectedMonth}
              <S.DatePickerArrowBox>
                <DatePickerArrow />
              </S.DatePickerArrowBox>
            </S.MonthPickerButton>
            {isMonthPickerOpen && (
              <DatePickerDropdown
                yearOrMonthList={monthList}
                handleSelectYearOrMonth={handleSelectMonth}
                handleDropdownClose={handleMonthPicker}
              />
            )}
          </S.MonthPickerContainer>
        </S.DatePickContainer>

        {/* Calendar Component */}
        <Calendar />
      </S.CalenaderContainer>
    </S.MyPageContainer>
  );
};

export default Mypage;
