import { useState, useEffect } from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import LogoBox from './Logo.styled';

function Logo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LogoBox>
      <Link to="/">
        <FaCar />
        {windowWidth >= 600 && <p>AutoMarket</p>}
      </Link>
    </LogoBox>
  );
}

export default Logo;
