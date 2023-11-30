import { HeaderContainer, HeaderBox } from './Header.styled';
import LoginButton from '../LoginButton/LoginButton';
import Logo from '../Logo/Logo';
import MenuButton from '../MenuButton/MenuButton';
import Nav from '../Nav/Nav';
import Searchbar from '../Searchbar/Searchbar';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function Header() {
  return (
    <HeaderBox>
      <HeaderContainer>
        <Logo />
        <Nav />
        <Searchbar />
        <ToggleTheme />
        <LoginButton />
        <MenuButton />
      </HeaderContainer>
    </HeaderBox>
  );
}

export default Header;
