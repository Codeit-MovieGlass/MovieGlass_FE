import PropTypes from 'prop-types';

import * as S from './ViewCountDropdown.styled';

const ViewCountDropdown = ({ handleCountClick, handleDropdown }) => {
  const MAX_VIEW_COUNT = 10;

  const handleViewCountClick = (count) => {
    handleCountClick(count);
    handleDropdown();
  };

  return (
    <S.ViewCountDropdownContainer>
      {Array.from({ length: MAX_VIEW_COUNT }).map((_, index) => (
        <S.ViewCountItem key={index} onClick={() => handleViewCountClick(index)}>
          <S.ViewCountButton>{index}</S.ViewCountButton>
        </S.ViewCountItem>
      ))}
    </S.ViewCountDropdownContainer>
  );
};

ViewCountDropdown.propTypes = {
  handleCountClick: PropTypes.func.isRequired,
  handleDropdown: PropTypes.func.isRequired,
};

export default ViewCountDropdown;
