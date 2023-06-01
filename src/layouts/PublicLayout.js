import React, { useMemo } from 'react';

import Header from './commons/header';
import Footer from './commons/footer';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';

const PublicLayout = props => {
  const loading = useMemo(() => {
    return props.loading && props.loading.loading ? (
      <div className="wrap-loading">
        <ReactLoading type={'spinningBubbles'} height={'80px'} color="#fff" width={'80px'} />
      </div>
    ) : (
      ''
    );
    // eslint-disable-next-line
  }, [props.loading]);
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="public-layout">{props.children}</div>
        <Footer />
      </div>
      {loading}
    </>
  );
};

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(PublicLayout);
