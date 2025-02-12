import { useEffect } from 'react';

const useDisableScroll = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
};

export default useDisableScroll;
