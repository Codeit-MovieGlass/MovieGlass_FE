import { useState } from "react";
import {
  CalendarContainer,
  CalendarDay,
  CalendarGrid,
  CalendarHeader,
  CalendarTitle,
  Container,
  DocumentButton,
  EditIcon,
  HeartButton,
  NavButtons,
  ProfileFrame,
  ProfileImage,
  ProfileNavContainer,
  ProfileSection,
  SettingsIcon,
  UserEmail,
  UserInfoFrame,
  Username,
  UsernameFrame,
} from "./MyPageStyles";

const MyPage = () => {
  const [username, setUsername] = useState("사용자 이름");
  const [userEmail, setUserEmail] = useState("user@example.com");

  return (
    <Container>
      {/* 프로필 섹션 */}
      <ProfileNavContainer>
        <ProfileSection>
          <ProfileImage />
          <ProfileFrame>
            <UserInfoFrame>
              <UsernameFrame>
                <Username>{username}</Username>
                <EditIcon>✏️</EditIcon>
                <SettingsIcon>⚙️</SettingsIcon>
              </UsernameFrame>
              <UserEmail>{userEmail}</UserEmail>
            </UserInfoFrame>
            <NavButtons>
              <DocumentButton>📑</DocumentButton>
              <HeartButton>💜</HeartButton>
            </NavButtons>
          </ProfileFrame>
        </ProfileSection>
      </ProfileNavContainer>

      {/* 캘린더 섹션 */}
      <CalendarContainer>
        <CalendarTitle>캘린더</CalendarTitle>
        <CalendarHeader>
          <span style={{ color: "red" }}>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span style={{ color: "blue" }}>Sat</span>
        </CalendarHeader>
        <CalendarGrid>
          {[...Array(31)].map((_, index) => (
            <CalendarDay key={index}>{index + 1}</CalendarDay>
          ))}
        </CalendarGrid>
      </CalendarContainer>
    </Container>
  );
};

export default MyPage;
