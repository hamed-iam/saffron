import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

const Crypto = ({ item: { name, price_usd, symbol } }) => {
  return (
    <Container>
      <>
        {symbol} - $ {price_usd}
      </>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
`;

export default Crypto;
