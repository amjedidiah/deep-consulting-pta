// Module imports
import React, {Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import {ToastContainer} from 'react-toastify';

// App routes import
import Routing from 'routing';

// Redux imports
import {setDummy} from 'redux/actions/dummy';
import {getLoading} from 'redux/selectors';

/**
 * @component App
 * @param {object} props
 * @return {React.Component} - The UI DOM object
 *
 * @example
 * return <App />
 */
function App(props) {
  useEffect(() => props.setDummy(), []);

  return (
    <Suspense fallback={<LoadingBar />}>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

App.propTypes = {
  /**
   * App setDummy
   */
  setDummy: PropTypes.func,
  /**
   * App loading
   */
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: true,
};

/**
 * Maps redux state to component props
 * @param {state} state
 * @return {{loading: boolean}}
 */
const mapStateToProps = ({dummy}) => ({
  loading: getLoading(dummy),
});

// Component export
export default connect(mapStateToProps, {setDummy})(App);
