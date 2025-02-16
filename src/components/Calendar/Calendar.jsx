import PropTypes from 'prop-types';

import generateCalendar from './generateCalender';

import * as S from './Calendar.styled';

const Calendar = ({ year, month, movieCalendar }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <S.CalendarContainer>
      <S.CalendarDayList>
        {daysOfWeek.map((day) => (
          <S.CalendarDayItem key={day}>
            <S.CalendarDay $sat={day === 'Sat'} $sun={day === 'Sun'}>
              {day}
            </S.CalendarDay>
          </S.CalendarDayItem>
        ))}
      </S.CalendarDayList>

      {/* Calendar Grid */}
      <S.CalendarGrid>
        {year &&
          month &&
          generateCalendar(year, month).map((day, index) => {
            const isPosterExist = movieCalendar && movieCalendar[day.fullDate];
            const posterUrl = isPosterExist ? isPosterExist[0].poster : null;

            return (
              <S.CalendarGridItem key={index}>
                <S.CalendarUnit $posterUrl={posterUrl} $prevNextMonth={day.monthType !== 'current'}>
                  {day.date}
                </S.CalendarUnit>
              </S.CalendarGridItem>
            );
          })}
      </S.CalendarGrid>
    </S.CalendarContainer>
  );
};

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  movieCalendar: PropTypes.object.isRequired,
};

export default Calendar;
