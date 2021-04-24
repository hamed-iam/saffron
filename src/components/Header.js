import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgDarkMode } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkTheme } from '../redux/theme/themeActions';

const Header = () => {
  const darkThemeEnabled = useSelector((state) => state.theme.darkThemeEnabled);
  const dispatch = useDispatch();
  return (
    <Container>
      <Logo>
        <h2>saffron</h2>
      </Logo>

      <Links>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <input
          checked={darkThemeEnabled}
          type="checkbox"
          onChange={() => dispatch(toggleDarkTheme())}
        />
      </Links>
    </Container>
  );
};

const Container = styled.main`
  position: absolute;
  top: 1rem;

  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid whitesmoke;
  border-bottom: 3px solid whitesmoke;

  /* :hover {
    background-color: whitesmoke;
    transition: 0.2s ease-in-out;
  } */
`;
const Logo = styled.div``;

const Links = styled.div`
  display: flex;
  a {
    padding: 1rem;
    text-decoration: none;
    color: inherit;
  }
`;
export default Header;
