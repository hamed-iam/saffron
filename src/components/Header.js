import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkTheme } from '../redux/theme/themeActions';
import { Button } from '@material-ui/core';
import logo from '../safff.png';

const Header = () => {
  const darkThemeEnabled = useSelector((state) => state.theme.darkThemeEnabled);
  const dispatch = useDispatch();
  return (
    <Container>
      <Links>
        <Switch
          checked={darkThemeEnabled}
          onChange={() => dispatch(toggleDarkTheme())}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          className="switch"
        />
        <Link to="/">
          <Button color="inherit">ارز</Button>
        </Link>

        <Link to="/about">
          <Button color="inherit">کریپتو</Button>
        </Link>
        <Link to="/contact">
          <Button color="inherit">تماس</Button>
        </Link>
      </Links>
      <Logo>
        <img src={logo} alt="saffron" />
      </Logo>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  top: 0;
  overflow: hidden;
  width: 90%;
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid whitesmoke;
  border-bottom: 3px solid whitesmoke;

  /* :hover {
    background-color: whitesmoke;
    transition: 0.2s ease-in-out;
  } */
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 0.1rem;
    padding-left: 0.1rem;
  }
`;
export default Header;
