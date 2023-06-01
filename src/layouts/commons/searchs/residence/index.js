import React from 'react';
import { Form } from 'react-bootstrap';

const SearchResidence = () => {
  return (
    <>
      <div className="container search-wrapper">
        <div className="search-form">
          <ul className="nav nav-tabs" id="searchForm" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="Residence-tab"
                data-toggle="tab"
                href="#Residence"
                role="tab"
                aria-controls="Residence"
                aria-selected="true"
              >
                Residence
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="Office-tab"
                data-toggle="tab"
                href="#Office"
                role="tab"
                aria-controls="Office"
                aria-selected="false"
              >
                Office
              </a>
            </li>
          </ul>
          <div className="tab-content" id="searchFormContent">
            <div className="tab-pane fade show active" id="Residence" role="tabpanel" aria-labelledby="Residence-tab">
              <Form>
                <div className="group-control">
                  <div className="row">
                    <div className="col-12 order-md-2 col-md-7 mb-1">
                      <div className="slide-bar">
                        <div className="slide-prices">
                          <div className="slide-price-numner">
                            <span className="min">$0</span>
                            <span className="max float-right">$5000~</span>
                          </div>
                          <div className="slide-container">
                            <span className="min bubble" id="minBubble">
                              $1,000
                            </span>
                            <span id="maxBubble" className="max bubble">
                              $2,000
                            </span>
                            <span className="bar-process"></span>
                            <input
                              type="range"
                              min="0"
                              max="5000"
                              value="1342"
                              className="slider min-slider"
                              id="rangeMin"
                            />
                            <input
                              type="range"
                              min="0"
                              max="5000"
                              value="4335"
                              className="slider max-slider"
                              id="rangeMax"
                            />
                          </div>
                        </div>
                        <div className="units">
                          <span>192</span>
                          Units
                        </div>
                      </div>
                    </div>
                    <div className="col-12 order-md-1 col-md-5 mb-1">
                      <input className="form-control" type="text" placeholder="Keyword (e.g. Vinhomes)" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-5">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <select className="form-control">
                            <option value="">Hanoi</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <select className="form-control">
                            <option value="">Nam Từ Liêm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <select className="form-control">
                            <option value="">Type</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <select className="form-control">
                            <option value="">Bedrooms</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row more" id="moreConditions">
                    <div className="col-12 col-md-5">
                      <select className="form-control">
                        <option value="">Projects</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <select className="form-control">
                            <option value="">Size Range</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <div className="form-control select-control" id="facilities">
                            Facilities
                          </div>
                        </div>
                      </div>
                      <div className="facilities" id="fcDropDown">
                        <div className="row">
                          <div className="col-12">
                            <span className="link-red uppercase">Building Facilities</span>
                          </div>
                        </div>
                        <div className="row building">
                          <div className="col-12 col-md-4">
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Supper Market</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Convenient Store</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Security</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Reception</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Shuttle Bus</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Playground</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Gym</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Indoor Pool</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Outdoor Pool</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row interior">
                          <div className="col-12">
                            <span className="link-red uppercase">Interior Facilities</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-4">
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Bath Tub</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Washlet</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Balcony</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Central Hot Water</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Washing Machine</span>
                              </label>
                            </div>
                            <div className="form-item">
                              <label>
                                <input type="checkbox" value="" /> <span>Dry Machine</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-7 offset-md-5">
                      <div className="row align-items-center advance-search">
                        <div className="col-12 col-md-6 mb-3">
                          <button className="more-conditions" id="advance-search">
                            <span>
                              <span className="icon-plus"></span>{' '}
                              <span className="text1 advance-text">Advance Search</span>
                              <span className="text1 not-show collapse-text">Collapse Search</span>
                            </span>
                          </button>
                        </div>
                        <div className="col-12 col-md-3 mb-3">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-rotate-cw"
                            >
                              <polyline points="23 4 23 10 17 10"></polyline>
                              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                            </svg>
                            Reset Criteria
                          </span>
                        </div>
                        <div className="col-12 col-md-3 mb-3">
                          <button className="button button-red">
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
                              className="feather feather-search"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>{' '}
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div className="tab-pane fade" id="Office" role="tabpanel" aria-labelledby="Office-tab"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResidence;
