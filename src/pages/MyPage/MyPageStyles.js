import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileNavContainer = styled.div`
  width: 1224px;
  height: 240px;
  gap: 63px;
  top: 306px;
  left: 348px;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ProfileImage = styled.div`
  width: 240px;
  height: 240px;
  background-color: #ddd;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileFrame = styled.div`
  width: 921px;
  height: 237px;
  gap: 24px;
`;

export const UserInfoFrame = styled.div`
  width: 418px;
  height: 113px;
  gap: 12px;
`;

export const UsernameFrame = styled.div`
  width: 418px;
  height: 58px;
  gap: 24px;
`;

export const Username = styled.h2`
  width: 282px;
  height: 58px;
  font-family: NEXON Lv2 Gothic;
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
  letter-spacing: 2%;
`;

export const UserEmail = styled.p`
  width: 418px;
  height: 43px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: 3%;
  color: #d2d1d2;
`;

export const NavButtons = styled.div`
  width: 224px;
  height: 100px;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const DocumentButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 17.4px;
  background: #F5F4F5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

export const HeartButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 17.4px;
  background: #F5F4F5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

export const EditIcon = styled.span`
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: #965AFF;
  cursor: pointer;
`;

export const SettingsIcon = styled.span`
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: #965AFF;
  cursor: pointer;
`;

export const CalendarContainer = styled.div`
  width: 1224px;
  height: 1308px;
  top: 666px;
  left: 348px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const CalendarTitle = styled.h2`
  width: 1224px;
  height: 43px;
  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: 2%;
  text-align: center;
  color: #fff;
`;

export const CalendarHeader = styled.div`
  width: 1224px;
  height: 56px;
  display: flex;
  justify-content: space-around;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const CalendarGrid = styled.div`
  width: 1224px;
  height: 1185px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

export const CalendarDay = styled.div`
  width: 168px;
  height: 220px;
  padding: 16px;
  background: #3B383B;
 
`;