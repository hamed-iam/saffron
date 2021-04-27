import { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { fetchCrypto } from '../redux/crypto/cryptoAction';
import styled from 'styled-components';
import Crypto from '../components/Crypto';

const About = ({ cryptoData, fetchCrypto }) => {
  useEffect(() => {
    fetchCrypto();
  }, [fetchCrypto]);
  console.log(cryptoData.crypto);
  return (
    <Layout>
      <Container>
        {cryptoData.loading ? (
          <h2>loading...</h2>
        ) : cryptoData.error ? (
          <h2>{cryptoData.error}</h2>
        ) : (
          cryptoData.crypto &&
          cryptoData.crypto.data &&
          cryptoData.crypto.data.map((item) => {
            return <Crypto item={item} />;
          })
        )}
      </Container>
    </Layout>
  );
};

const Container = styled.main`
  overflow: hidden;
  padding: 5rem;
`;

const mapStateToProps = (state) => {
  return {
    cryptoData: state.crypto,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrypto: () => dispatch(fetchCrypto()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
