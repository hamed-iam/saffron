import Footer from '../Footer';
import Header from '../Header';
import styled from 'styled-components';
import theme from 'styled-theming';
import DarkThemeProvider from '../DarkThemeProvider';
export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#2d2d2d',
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

const Layout = ({ children }) => {
  return (
    <DarkThemeProvider>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </DarkThemeProvider>
  );
};

export default Layout;

const Container = styled.main`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${backgroundColor};
  color: ${textColor};
  transition: 0.5s ease-in-out;
`;
