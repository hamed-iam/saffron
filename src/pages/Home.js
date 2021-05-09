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
      <Main>
        {' '}
        {arzData.currency && !arzData.error && (
          <BtnContainer>
            {' '}
            <Button
              variant="contained"
              color={toggle ? 'primary' : 'secondary'}
              onClick={() => setToggle(!toggle)}
              style={{ marginTop: '15px', width: '5rem' }}
            >
              {toggle ? 'Buy' : 'Sell'}
            </Button>
          </BtnContainer>
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
      </Main>
    </Layout>
  );
};
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.main`
  padding: 0.5rem;
  width: 90%;
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
const BtnContainer = styled.div``;
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
