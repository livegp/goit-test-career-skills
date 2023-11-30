import { NavBox, NavLink } from './Nav.styled';

function Nav() {
  return (
    <NavBox>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </NavBox>
  );
}

export default Nav;
