import { Card, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styled from 'styled-components';
const SanaArz = ({ data: { title, p, updated_at, t } }) => {
  return (
    <Grid item component={Card}>
      <CardContent>
        <div>{title}</div>
        <CountUp start={0} end={p} duration={1} separator="," />
        <div> {t}</div>
      </CardContent>
    </Grid>
  );
};

const Section = styled.div`
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid whitesmoke;
  margin: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
export default SanaArz;
