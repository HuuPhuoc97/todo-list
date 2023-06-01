import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, PhoneCall, EmailIcon, ChatIcon } from '../icons';

const Supports = () => {
  return (
    <>
      <div className="supports">
        <ul>
          <li className="box-phone">
            <span className="circle search">
              <SearchIcon />
            </span>
          </li>
          <li>
            <span className="circle call">
              <PhoneCall />
            </span>
            <div className="buttons phone">
              <div className="button button-red">
                <span>For Inquiry</span>
                <Link to="tel:0902124649">
                  <span>090-212-4649</span>
                </Link>
              </div>
              <div className="button button-red button-gray">
                <span>Customer Support</span>
                <Link to="tel:0918684649">
                  <span>091-868-4649</span>
                </Link>
              </div>
            </div>
          </li>
          <li className="box-email">
            <span className="circle email">
              <EmailIcon />
            </span>
            <div className="buttons phone">
              <div className="button button-red">
                <span>For Inquiry</span>
                <Link to="mailto:thaont@vietnamhousing.vn">
                  <span>thaont@vietnamhousing.vn</span>
                </Link>
              </div>
              <div className="button button-red button-gray">
                <span>Customer Support</span>
                <Link to="mailto:support@vietnamhousing.vn">
                  <span>support@vietnamhousing.vn</span>
                </Link>
              </div>
            </div>
          </li>
          <li className="box-chat">
            <span className="circle chat">
              <ChatIcon />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Supports;
