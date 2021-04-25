import { useEffect } from 'react';

import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { fetchCur } from '../redux/arz/arzActions';
import { MagicSpinner } from 'react-spinners-kit';
import SanaArz from '../components/SanaArz';
const Home = ({ arzData, fetchCur }) => {
  console.log(arzData, fetchCur);

  useEffect(() => {
    fetchCur();
  }, [fetchCur]);

  // if (arzData.loading) {
  //   return 'loading...';
  // }

  return (
    <Layout>
      {arzData.loading && <MagicSpinner size={70} color="red" />}
      {arzData.error && <h2>OOppss, try again later</h2>}

      {arzData.currency && (
        <div>
          {arzData.currency.slice(0, 15).map((data) => {
            return <SanaArz data={data} />;
          })}
        </div>
      )}
    </Layout>
  );
};

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
