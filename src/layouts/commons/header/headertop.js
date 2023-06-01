import React from 'react';
import { Link } from 'react-router-dom';
import { Location, ChevronDownIcon } from '../icons';

const HeaderTop = () => {
  return (
    <section className="section-header-top header-top background-black">
      <div className="container">
        <div className="row align-items-center">
          <div className="co-12 offset-md-6 col-md-6">
            <div className="nav-menu-top">
              <ul className="menu-top">
                <li>
                  <Link className="item-link" to="/vi-tri/hanoi">
                    <Location />
                    <span>Hue</span>
                    <ChevronDownIcon />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/vi-tri/hai-phong">Hue</Link>
                    </li>
                    <li>
                      <Link to="/vi-tri/hanoi">Hanoi</Link>
                    </li>
                    <li>
                      <Link to="/vi-tri/ho-chi-minh">Ho Chi Minh</Link>
                    </li>
                    <li>
                      <Link to="/vi-tri/tokyo">Tokyo</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/thanh-vien/dang-nhap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Member</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
