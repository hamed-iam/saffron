import CountUp from 'react-countup';
import styled from 'styled-components';
const SanaArz = ({ data: { title, p } }) => {
  return (
    <Section>
      {title} - <CountUp start={0} end={p} duration={1} separator="," />
    </Section>
  );
};

const Section = styled.div`
  background-color: red;
  padding: 0.2rem;
  border-radius: 10px;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
export default SanaArz;
