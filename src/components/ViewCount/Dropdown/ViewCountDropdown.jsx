import PropTypes from 'prop-types';

import * as S from './ViewCountDropdown.styled';

const ViewCountDropdown = ({ handleCountClick }) => {
  const MAX_VIEW_COUNT = 10;

  return (
    <S.ViewCountDropdownContainer>
      {Array.from({ length: MAX_VIEW_COUNT }).map((_, index) => (
        <S.CountItem key={index} onClick={() => handleCountClick(index)}>
          {index}
        </S.CountItem>
      ))}
    </S.ViewCountDropdownContainer>
  );
};

ViewCountDropdown.propTypes = {
  handleCountClick: PropTypes.func.isRequired,
};

export default ViewCountDropdown;
