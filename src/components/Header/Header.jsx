import { HeaderContainer, HeaderBox } from './Header.styled';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function Header() {
  return (
    <HeaderBox>
      <HeaderContainer>
        <Logo />
        <Nav />
        <ToggleTheme />
      </HeaderContainer>
    </HeaderBox>
  );
}

export default Header;
