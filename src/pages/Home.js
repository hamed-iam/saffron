import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { fetchCur } from '../redux/arz/arzActions';
import { MagicSpinner } from 'react-spinners-kit';
import SanaArz from '../components/SanaArz';
import { Button, Grid } from '@material-ui/core';
const Home = ({ arzData, fetchCur }) => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetchCur();
  }, [fetchCur]);

  // if (arzData.loading) {
  //   return 'loading...';
  // }

  return (
    <Layout>
      {arzData.currency && !arzData.error && (
        <Button
          variant="contained"
          onClick={() => setToggle(!toggle)}
          style={{ marginTop: '15px', width: '5rem' }}
        >
          Buy/Sell
        </Button>
      )}

      {arzData.error && (
        <ErrorContainer>
          <h4>اوپسی دوپسی... یا اینترنت نداری یا سنا کار کار نمیکنه </h4>
        </ErrorContainer>
      )}

      {arzData.loading ? (
        <MagicSpinner size={70} color="red" />
      ) : toggle && arzData.currency ? (
        <Container>
          {arzData.currency.slice(0, 15).map((data, i) => {
            return (
              <Content key={i}>
                <SanaArz data={data} />
              </Content>
            );
          })}
        </Container>
      ) : (
        !toggle &&
        arzData.currency && (
          <Container>
            {arzData.currency.slice(16, 31).map((data, i) => {
              return (
                <Content key={i}>
                  <SanaArz data={data} />
                </Content>
              );
            })}
          </Container>
        )
      )}
    </Layout>
  );
};

const Container = styled.main`
  /* height: 65%;
  width: 100%; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  padding: 1rem;
`;
const Content = styled.section`
  width: 100%;
`;
const ErrorContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const mapStateToProps = (state) => {
  return {
    arzData: state.arz,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCur: () => dispatch(fetchCur()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
