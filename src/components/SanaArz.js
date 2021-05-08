import { Card, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styled from 'styled-components';
const SanaArz = ({ data: { title, p, updated_at, t } }) => {
  return (
    <Section>
      <div className="ctx">{title}</div>
      <div className="ctx">
        <CountUp start={0} end={p} duration={1} separator="," />
      </div>
      <div className="ctx">{updated_at}</div>
      <div className="ctx-t"> {t}</div>
    </Section>
  );
};

const Section = styled.div`
  padding: 1rem;
  border-radius: 15px;
  border: 3px solid whitesmoke;
  margin: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .ctx {
    display: flex;
    justify-content: flex-start;
    width: 25%;
  }
  .ctx-t {
    display: flex;
    justify-content: flex-end;
    width: 25%;
  }
`;
export default SanaArz;
