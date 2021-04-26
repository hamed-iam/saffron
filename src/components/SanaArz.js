import CountUp from 'react-countup';
import styled from 'styled-components';
const SanaArz = ({ data: { title, p, updated_at, t } }) => {
  return (
    <Section>
      <div>{title}</div>
      <div>
        <CountUp start={0} end={p} duration={1} separator="," />
      </div>
      <div> {t}</div>
    </Section>
  );
};

const Section = styled.div`
  padding: 0.2rem;

  border-bottom: 1px solid whitesmoke;
  margin: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
export default SanaArz;
