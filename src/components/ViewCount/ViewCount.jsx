import { useState } from 'react';

import ViewCountDropdown from './Dropdown/ViewCountDropdown';

import { ViewCountEyeIcon } from '@icons/Eye';
import { ViewCountDropdownArrow } from '@icons/Arrow';

import * as S from './ViewCount.styled';

const ViewCount = () => {
  const [viewCount, setViewCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleCountClick = (count) => setViewCount(count);

  return (
    <S.ViewCountContainer>
      <ViewCountEyeIcon />
      <S.CountBox onClick={handleDropdown}>
        <S.SelectedCount>{viewCount}</S.SelectedCount>
        <ViewCountDropdownArrow />
        {isDropdownOpen && <ViewCountDropdown handleCountClick={handleCountClick} />}
      </S.CountBox>
    </S.ViewCountContainer>
  );
};

export default ViewCount;
