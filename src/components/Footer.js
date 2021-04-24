import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <Container>
      <Name>
        <h4>Hamed Ghazali © {new Date().getFullYear()}</h4>
      </Name>
      <Links>
        <a
          href="https://www.instagram.com/hamed_iam/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a href="https://github.com/hamed-iam" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hamed-ghazali/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </Links>
    </Container>
  );
};

const Container = styled.main`
  position: absolute;
  bottom: 1rem;

  width: 90%;
  border-top: 3px solid whitesmoke;
  border-bottom: 3px solid whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background-color: whitesmoke;
    transition: 0.2s ease-in-out;
  }
`;

const Name = styled.div`
  padding-left: 1rem;
  h4 {
    color: inherit;
  }
`;

const Links = styled.div`
  display: flex;
  padding: 0 0.8rem 0 0.8rem;
  align-items: center;
  a {
    padding: 0 0.5rem 0 0.5rem;
    text-decoration: none;
    list-style: none;
    color: inherit;
    font-size: 1.5rem;
  }
`;

export default Footer;
