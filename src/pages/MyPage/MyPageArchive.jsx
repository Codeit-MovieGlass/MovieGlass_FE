import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function MyPageArchive() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [diaryEntries, setDiaryEntries] = useState([]);

  // 사용자 프로필 불러오기 (변경 없음)
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await fetch('/api/profile', {
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error('프로필 정보를 불러오는 중 오류 발생:', error);
      }
    }
    fetchUserProfile();
  }, []);

  // 다이어리 항목 불러오기 (새로 추가)
  useEffect(() => {
    async function fetchDiaryEntries() {
      try {
        const response = await fetch('/api/diary-entries', {
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          // data는 예: [{ date: '2025-02-01', posterImageUrl: 'https://example.com/movie1.jpg', ... }, ... ]
          setDiaryEntries(data);
        }
      } catch (error) {
        console.error('다이어리 항목을 불러오는 중 오류 발생:', error);
      }
    }
    fetchDiaryEntries();
  }, []);

  /* ─── 캘린더 섹션 (수정됨) ────────────────────────────── */
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  // 달력 그리드에 필요한 총 칸 수 (7의 배수)
  const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;
  const calendarDates = [];

  for (let i = 0; i < totalCells; i++) {
    let date, day, isCurrentMonth;
    if (i < startDay) {
      // 이전 달 날짜
      day = prevMonthDays - startDay + i + 1;
      date = new Date(currentYear, currentMonth - 1, day);
      isCurrentMonth = false;
    } else if (i < startDay + daysInMonth) {
      // 현재 달 날짜
      day = i - startDay + 1;
      date = new Date(currentYear, currentMonth, day);
      isCurrentMonth = true;
    } else {
      // 다음 달 날짜
      day = i - (startDay + daysInMonth) + 1;
      date = new Date(currentYear, currentMonth + 1, day);
      isCurrentMonth = false;
    }
    calendarDates.push({ day, date, isCurrentMonth });
  }

  // 오늘 날짜 여부 체크
  const isToday = (date) => {
    const d = new Date();
    return (
      date.getFullYear() === d.getFullYear() &&
      date.getMonth() === d.getMonth() &&
      date.getDate() === d.getDate()
    );
  };

  return (
    <Container>
      {/* 사용자 프로필 섹션 (변경 없음) */}
      <ProfileSection>
        {user ? (
          <>
            <ProfileImage
              style={{
                backgroundImage: `url(${user.profileImageUrl || '/default_profile.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </>
        ) : (
          <>
            <ProfileImage />
            <h2>로그인이 필요합니다</h2>
            <LoginButton onClick={() => navigate('/login')}>로그인</LoginButton>
          </>
        )}
      </ProfileSection>

      {/* 네비게이션 버튼 (변경 없음) */}
      <NavContainer>
        <NavButton onClick={() => navigate('/collection')}>컬렉션</NavButton>
        <NavButton onClick={() => navigate('/review')}>리뷰/평가</NavButton>
        <NavButton onClick={() => navigate('/diary')}>다이어리</NavButton>
      </NavContainer>

      {/* 캘린더 섹션 (수정됨) */}
      <CalendarSection>
        <h3>📅 캘린더</h3>
        <CalendarGrid>
          {calendarDates.map((item, index) => {
            // diaryEntries 배열에서 해당 날짜와 일치하는 항목 검색
            const diaryEntry = diaryEntries.find((entry) => {
              const entryDate = new Date(entry.date);
              return (
                entryDate.getFullYear() === item.date.getFullYear() &&
                entryDate.getMonth() === item.date.getMonth() &&
                entryDate.getDate() === item.date.getDate()
              );
            });

            return (
              <CalendarItem
                key={index}
                isCurrentMonth={item.isCurrentMonth}
                isToday={isToday(item.date)}
              >
                {diaryEntry ? (
                  <PosterImage src={diaryEntry.posterImageUrl} alt="영화 포스터" />
                ) : (
                  item.day
                )}
              </CalendarItem>
            );
          })}
        </CalendarGrid>
      </CalendarSection>
    </Container>
  );
}

/* ─── Styled Components ────────────────────────────── */
const Container = styled.div`
  text-align: center;
  padding: 2vw;
  font-family: Arial, sans-serif;
  max-width: 100%;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
`;

const ProfileImage = styled.div`
  width: 20vw;
  height: 20vw;
  max-width: 408px;
  max-height: 408px;
  border-radius: 50%;
  background-color: lightgray;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;
  }
`;

const LoginButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  margin: 3vw 0;
  flex-wrap: wrap;
`;

const NavButton = styled.button`
  width: 25vw;
  height: 20vw;
  max-width: 408px;
  max-height: 413px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 768px) {
    width: 45vw;
    height: auto;
  }
`;

const CalendarSection = styled.div`
  width: 80vw;
  max-width: 1347px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 1vw;
  row-gap: 1vw;
  margin-top: 2vw;
`;

const CalendarItem = styled.div`
  width: 10vw;
  height: 15vw;
  max-width: 175px;
  max-height: 257px;
  background-color: ${({ isCurrentMonth }) => (isCurrentMonth ? '#e0e0e0' : '#f9f9f9')};
  border: ${({ isToday }) => (isToday ? '2px solid red' : 'none')};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isCurrentMonth }) => (isCurrentMonth ? 'black' : 'gray')};

  @media (max-width: 768px) {
    width: 12vw;
    height: 18vw;
  }
`;

// 캘린더에 표시할 포스터 이미지를 위한 컴포넌트
const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
