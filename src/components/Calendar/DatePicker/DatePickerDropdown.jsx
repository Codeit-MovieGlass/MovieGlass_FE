import PropTypes from 'prop-types';

import * as S from './DatePickerDropdown.styled';

const DatePickerDropdown = ({ yearOrMonthList, handleSelectYearOrMonth, handleDropdownClose }) => {
  const handleItemClick = (item) => {
    handleSelectYearOrMonth(item);
    handleDropdownClose();
  };

  return (
    <S.DatePickerDropdownList>
      {yearOrMonthList.map((item, index) => (
        <S.DatePickerDropdownItem key={index}>
          <S.DatePickerButton onClick={() => handleItemClick(item)}>{item}</S.DatePickerButton>
        </S.DatePickerDropdownItem>
      ))}
    </S.DatePickerDropdownList>
  );
};

DatePickerDropdown.propTypes = {
  yearOrMonthList: PropTypes.array.isRequired,
  handleSelectYearOrMonth: PropTypes.func,
  handleDropdownClose: PropTypes.func,
};

export default DatePickerDropdown;
