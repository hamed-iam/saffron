import Footer from '../Footer';
import Header from '../Header';
import styled from 'styled-components';
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
