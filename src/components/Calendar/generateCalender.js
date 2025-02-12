import PropTypes from 'prop-types';
import { format, getDaysInMonth, startOfMonth, subMonths } from 'date-fns';

const generateCalendar = (year, month) => {
  const firstDay = startOfMonth(new Date(year, month - 1, 1));
  // console.log('특정 달의 1일: ', firstDay);

  const startDayOfWeek = firstDay.getDay();
  // console.log('특정 달의 첫날의 요일: ', startDayOfWeek); // 0(일) ~ 6(토)

  const totalDaysInMonth = getDaysInMonth(firstDay);
  // console.log('특정 달의 총 일수: ', totalDaysInMonth);

  const prevMonth = subMonths(firstDay, 1);
  const prevMonthDays = getDaysInMonth(prevMonth);
  // console.log('이전 달의 총 일수: ', prevMonthDays);

  const prevDays = Array.from({ length: startDayOfWeek }, (_, i) => ({
    date: prevMonthDays - startDayOfWeek + i + 1,
    fullDate: format(
      new Date(year, month - 2, prevMonthDays - startDayOfWeek + 1 + i),
      'yyyy-MM-dd'
    ),
    monthType: 'prev',
  }));

  const currentDays = Array.from({ length: totalDaysInMonth }, (_, i) => ({
    date: i + 1,
    fullDate: format(new Date(year, month - 1, i + 1), 'yyyy-MM-dd'),
    monthType: 'current',
  }));

  const totalCells = prevDays.length + currentDays.length;
  // console.log('총 달력 Unit의 수: ', totalCells);

  const nextDaysCount = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  // console.log('렌더링할 다음 달의 일부 날짜의 수: ', nextDaysCount);

  const nextDays = Array.from({ length: nextDaysCount }, (_, i) => ({
    date: i + 1,
    fullDate: format(new Date(year, month, i + 1), 'yyyy-MM-dd'),
    monthType: 'next',
  }));

  const calendarDays = [...prevDays, ...currentDays, ...nextDays];
  // console.log('최종 달력 배열: ', calendarDays);

  return calendarDays;

  //   const weeks = [];
  //   for (let i = 0; i < calendarDays.length; i += 7) {
  //     weeks.push(calendarDays.slice(i, i + 7));
  //   }
  //   console.log('달력 주차 단위로 잘라낸 배열: ', weeks);

  //   return weeks;
};

generateCalendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};

export default generateCalendar;
