import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import CountUp from 'react-countup';
import styled from 'styled-components';

const Crypto = ({ item: { name, price_usd, symbol } }) => {
  return (
    <Container>
      <div className="ctx">
        <Typography>{name}</Typography>
      </div>
      <div className="ctx">
        <Typography>{symbol}</Typography>
      </div>
      <div className="ctx">
        <Typography>${price_usd}</Typography>
      </div>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  border: 2px solid whitesmoke;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ctx {
    display: flex;
    justify-content: flex-start;
    width: 25%;
  }
`;

export default Crypto;
