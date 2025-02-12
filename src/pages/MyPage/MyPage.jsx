import { useEffect, useRef, useState } from 'react';
import { format, subYears } from 'date-fns';

import AccountDropdown from '@components/AccountDropdown/AccountDropdown';
import Calendar from '@components/Calendar/Calendar';
import DatePickerDropdown from '@components/Calendar/DatePicker/DatePickerDropdown';
import ModalWrapper from '@components/Modal/Wrapper/ModalWrapper';
import QuitModal from '@components/Modal/Quit/QuitModal';

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

  const yearList = Array.from({ length: 5 }, (_, index) => {
    return format(subYears(new Date(), index), 'yyyy');
  });
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

  // prop으로 넘겨줄 Month 값을 숫자로 변환하는 함수F
  const convertMonthToNumber = (month) => {
    const index = monthList.indexOf(month);
    return index !== -1 ? index + 1 : undefined;
  };

  //  현재 날짜 기준으로 Date Picker 초기 값 설정
  const currentYear = format(new Date(), 'yyyy'); // "2025"
  const currentMonth = format(new Date(), 'MMM'); // "Feb"

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);

  const handleSelectYear = (year) => setSelectedYear(year);
  const handleYearPicker = () => setIsYearPickerOpen(!isYearPickerOpen);

  const [selectedMonth, setSelectedMonth] = useState(currentMonth.toUpperCase());
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

  const handleSelectMonth = (month) => setSelectedMonth(month);
  const handleMonthPicker = () => setIsMonthPickerOpen(!isMonthPickerOpen);

  const yearDropdownRef = useRef(null);
  const monthDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(e.target)) {
        setIsYearPickerOpen(false);
      }

      if (monthDropdownRef.current && !monthDropdownRef.current.contains(e.target)) {
        setIsMonthPickerOpen(false);
      }

      if (accountDropdownRef.current && !accountDropdownRef.current.contains(e.target)) {
        setIsAccountDropdownOpen(false);
      }

      if (quitModalRef.current && !quitModalRef.current.contains(e.target)) {
        setIsQuitModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Account Dropdown 상태 관리
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const handleAccountDropdown = () => setIsAccountDropdownOpen(!isAccountDropdownOpen);

  // 탈퇴 모달 상태 관리 및 Click Outside 이벤트 처리
  const quitModalRef = useRef(null);

  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);

  const handleQuitModalOpen = () => setIsQuitModalOpen(true);
  const handleQuitModalClose = () => setIsQuitModalOpen(false);

  return (
    <>
      <S.MyPageWrapper>
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
                  <S.AccountDropdownContainer ref={accountDropdownRef}>
                    <S.SettingsButton onClick={handleAccountDropdown}>
                      <SettingsIcon />
                    </S.SettingsButton>
                    {isAccountDropdownOpen && (
                      <AccountDropdown
                        handleAccountDropdown={handleAccountDropdown}
                        handleQuitModalOpen={handleQuitModalOpen}
                      />
                    )}
                  </S.AccountDropdownContainer>
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
            <Calendar year={Number(selectedYear)} month={convertMonthToNumber(selectedMonth)} />
          </S.CalenaderContainer>
        </S.MyPageContainer>
      </S.MyPageWrapper>
      {/* 탈퇴 모달 */}
      {isQuitModalOpen && (
        <ModalWrapper>
          <QuitModal topRef={quitModalRef} handleQuitModalClose={handleQuitModalClose} />
        </ModalWrapper>
      )}
    </>
  );
};

export default Mypage;
