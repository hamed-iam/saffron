import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      This is header
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Container>
  );
};

const Container = styled.main`
  position: absolute;
  top: 0;
`;

export default Header;
