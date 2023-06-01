import React from 'react';

const PrivateLayout = props => {
  return <div className="private-layout">private{props.children}</div>;
};
export default PrivateLayout;
