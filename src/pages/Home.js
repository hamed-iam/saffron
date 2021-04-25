import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { fetchCur } from '../redux/arz/arzActions';
import { MagicSpinner } from 'react-spinners-kit';
import SanaArz from '../components/SanaArz';
import { Button } from '@material-ui/core';
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
      <Button variant="contained" onClick={() => setToggle(!toggle)}>
        Buy/Sell
      </Button>

      {arzData.error && <h2>OOppss, try again later</h2>}

      {arzData.loading ? (
        <MagicSpinner size={70} color="red" />
      ) : toggle && arzData.currency ? (
        <Container>
          {arzData.currency.slice(0, 15).map((data, i) => {
            return (
              <React.Fragment key={i}>
                <SanaArz data={data} />
              </React.Fragment>
            );
          })}
        </Container>
      ) : (
        !toggle &&
        arzData.currency && (
          <Container>
            {arzData.currency.slice(16, 31).map((data, i) => {
              return (
                <React.Fragment key={i}>
                  <SanaArz data={data} />
                </React.Fragment>
              );
            })}
          </Container>
        )
      )}
    </Layout>
  );
};

const Container = styled.main`
  height: 78%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
