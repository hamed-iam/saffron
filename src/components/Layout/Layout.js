import Footer from '../Footer';
import Header from '../Header';
import styled from 'styled-components';
import theme from 'styled-theming';
import DarkThemeProvider from '../DarkThemeProvider';
export const backgroundColor = theme('theme', {
  light: '#fbfbf8',
  dark: '#2d2d2d',
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fbfbf8',
});

const Layout = ({ children }) => {
  return (
    <DarkThemeProvider>
      <ParentContainer>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </ParentContainer>
    </DarkThemeProvider>
  );
};

export default Layout;

const ParentContainer = styled.main`
  min-height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${backgroundColor};
  color: ${textColor};
  transition: 0.5s ease-in-out;
`;

const Container = styled.section`
  width: 85%;
`;
