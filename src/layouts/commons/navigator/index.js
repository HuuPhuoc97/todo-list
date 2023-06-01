import React from 'react';
import { Link } from 'react-router-dom';
const Navigator = () => {
  return (
    <>
      <section className="section-home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2 col-md-2 text-left mt-2 mb-2">
              <Link to="/">
                <h4>Home</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigator;
