import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <Container>
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
      <Name>
        <h4>حامد غزالی © {new Date().getFullYear()}</h4>
      </Name>
    </Container>
  );
};

const Container = styled.main`
  overflow: hidden;
  bottom: 1rem;
  height: 2rem;
  margin-bottom: 1rem;
  width: 90%;
  border-top: 3px solid whitesmoke;
  border-bottom: 3px solid whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* :hover {
    background-color: whitesmoke;
    transition: 0.2s ease-in-out;
  } */
`;

const Name = styled.div`
  padding-left: 1rem;
  h4 {
    color: inherit;
  }
`;

const Links = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    color: inherit;
    font-size: 1.5rem;
    padding-left: 0.8rem;
  }
`;

export default Footer;
