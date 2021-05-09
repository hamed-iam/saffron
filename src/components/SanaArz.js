import { Card, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styled from 'styled-components';
const SanaArz = ({ data: { title, p, updated_at, t } }) => {
  return (
    <Section>
      <div className="ctx">
        <p>{title}</p>
      </div>
      <div className="ctx price">
        <CountUp start={0} end={p} duration={1} separator="," />
      </div>
      <div className="ctx active">{updated_at}</div>
      <div className="ctx-t"> {t}</div>
    </Section>
  );
};

const Section = styled.div`
  padding: 0.3rem;
  border-radius: 20px;
  border: 2px solid whitesmoke;
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
  .price {
    padding-left: 0.5rem;
  }
  @media screen and (max-width: 620px) {
    .active {
      display: none;
    }
  }
`;
export default SanaArz;
