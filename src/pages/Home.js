import { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { fetchCur } from '../redux/arz/arzActions';

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
      {arzData.loading && <h2>Loading</h2>}
      {arzData.error && <h2>OOppss, try again later</h2>}

      {arzData.currency && (
        <div>
          {arzData.currency.slice(0, 15).map((data) => {
            const { title, p, t, updated_at } = data;
            return (
              <ul>
                <li>
                  {title} - {p}
                </li>
              </ul>
            );
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
