import { useState, useEffect } from 'react';
import { RiMovie2Line } from 'react-icons/ri';
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
        <RiMovie2Line />
        {windowWidth >= 600 && <p>Movies</p>}
      </Link>
    </LogoBox>
  );
}

export default Logo;
