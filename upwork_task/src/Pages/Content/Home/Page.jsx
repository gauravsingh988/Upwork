import React from "react";

import southafrica from '../../../../public/img/south-africa.png';
import Westindies from '../../../../public/img/west_Indies.png'


const Page = () => {
  return (
    <div className="w-100 mt-2">
      <div className="container-fluid px-2">
        <div className="form-row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="left_mainsec cardbox">
              <div className="left_header">
                <div className="head_left">
                  <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                  Back |{" "}
                  <span className="d-flex align-items-center">
                    <span className="material-icons mr-1">sports_soccer</span>{" "}
                    Cricket
                  </span>
                </div>
                <div className="align-items-center d-flex head_right">
                  <span class="material-icons mr-1">schedule</span>
                  <span>11-05-2025 07:10 PM</span>
                </div>
              </div>
              <div className="left_slider">
                <div class="banner">
                  <div class="banner-text">
                    <span>West Indies A</span>
                    <img src={Westindies} alt="West Indies" />
                    <span>VS</span>
                    <img src={southafrica} alt="South Africa" />
                    <span>South Africa A</span>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="align-items-center d-flex left_toggle_Sec">
                <div className="live_icon align-items-center d-flex">
                  <span className="material-icons mr-1">live_tv</span>Live TV
                </div>
                <div className="graphsec align-items-center d-flex">
                  <span className="material-icons mr-1">analytics</span> Graph
                </div>
                <div className="d-flex toggle_sec">
                  <div class="toggle-container">
                    <input type="checkbox" id="toggle-switch" />
                    <label class="toggle-label" for="toggle-switch"></label>
                  </div>
                </div>
              </div>
              <div className="detail_cardsec">
                <div className="align-items-baseline d-flex detail_header justify-content-between">
                  <div className="detail_head_left">
                    <span> Match Odds</span>
                    <div className="d-flex toggle_sec">
                      <div class="toggle-container">
                        <input type="checkbox" id="toggle-switch2" />
                        <label
                          class="toggle-label"
                          for="toggle-switch2"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div className="align-items-center d-flex detail_header_right">
                    <span className="stackitemtext">
                      Stack item 100 - 1 | Max Profit : 10000
                    </span>
                    <button className="bookbtn btn">
                      <span className="material-icons mr-1">library_books</span>
                      Book
                    </button>
                    <button className="bookbtn btn">
                      <span className="material-icons mr-1">casino</span>Bets
                    </button>
                    <div className="setting_btn d-flex">
                      <span className="material-icons mr-1">lock</span>
                      <span className="material-icons mr-1">settings</span>
                    </div>
                  </div>
                </div>
                <div className="detail_body">
                  <table class="odds-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th class="back-header">BACK</th>
                        <th class="lay-header">LAY</th>
                        <th> </th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left team_namewidth">
                          West Indies A
                        </td>
                        <td>0</td>
                        <td class="back">
                          2.48
                          <br />
                          <small>19.72</small>
                        </td>
                        <td class="back">
                          2.50
                          <br />
                          <small>27</small>
                        </td>
                        <td class="blue-header">
                          2.52
                          <br />
                          <small>138.28</small>
                        </td>
                        <td class="orange-header">
                          2.74
                          <br />
                          <small>40.42</small>
                        </td>
                        <td class="lay">
                          2.80
                          <br />
                          <small>29.04</small>
                        </td>
                        <td class="lay">
                          2.90
                          <br />
                          <small>33.42</small>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left team_namewidth">
                          South Africa A
                        </td>
                        <td>0</td>
                        <td class="back">
                          2.48
                          <br />
                          <small>19.72</small>
                        </td>
                        <td class="back">
                          2.50
                          <br />
                          <small>27</small>
                        </td>
                        <td class="blue-header">
                          2.52
                          <br />
                          <small>138.28</small>
                        </td>
                        <td class="orange-header">
                          2.74
                          <br />
                          <small>40.42</small>
                        </td>
                        <td class="lay">
                          2.80
                          <br />
                          <small>29.04</small>
                        </td>
                        <td class="lay">
                          2.90
                          <br />
                          <small>33.42</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="detail_leftsec"></div>
                  <div className="detail_righsec"></div>
                </div>
              </div>
              <div className="detail_cardsec">
                <div className="align-items-baseline d-flex detail_header justify-content-between">
                  <div className="detail_head_left">
                    <span> Match Odds</span>
                    <div className="d-flex toggle_sec">
                      <div class="toggle-container">
                        <input type="checkbox" id="toggle-switch3" />
                        <label
                          class="toggle-label"
                          for="toggle-switch3"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div className="align-items-center d-flex detail_header_right">
                    <span className="stackitemtext">
                      Stack item 100 - 1 | Max Profit : 10000
                    </span>
                    <button className="bookbtn btn">
                      <span className="material-icons mr-1">library_books</span>
                      Book
                    </button>
                    <button className="bookbtn btn">
                      <span className="material-icons mr-1">casino</span>Bets
                    </button>
                    <div className="setting_btn d-flex">
                      <span className="material-icons mr-1">lock</span>
                      <span className="material-icons mr-1">settings</span>
                    </div>
                  </div>
                </div>
                <div className="detail_body">
                  <table class="odds-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th class="back-header">BACK</th>
                        <th class="lay-header">LAY</th>
                        <th> </th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left team_namewidth">
                          West Indies A
                        </td>
                        <td>0</td>
                        <td class="back">
                          2.48
                          <br />
                          <small>19.72</small>
                        </td>
                        <td class="back">
                          2.50
                          <br />
                          <small>27</small>
                        </td>
                        <td class="blue-header">
                          2.52
                          <br />
                          <small>138.28</small>
                        </td>
                        <td class="orange-header">
                          2.74
                          <br />
                          <small>40.42</small>
                        </td>
                        <td class="lay">
                          2.80
                          <br />
                          <small>29.04</small>
                        </td>
                        <td class="lay">
                          2.90
                          <br />
                          <small>33.42</small>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left team_namewidth">
                          South Africa A
                        </td>
                        <td>0</td>
                        <td class="back">
                          2.48
                          <br />
                          <small>19.72</small>
                        </td>
                        <td class="back">
                          2.50
                          <br />
                          <small>27</small>
                        </td>
                        <td class="blue-header">
                          2.52
                          <br />
                          <small>138.28</small>
                        </td>
                        <td class="orange-header">
                          2.74
                          <br />
                          <small>40.42</small>
                        </td>
                        <td class="lay">
                          2.80
                          <br />
                          <small>29.04</small>
                        </td>
                        <td class="lay">
                          2.90
                          <br />
                          <small>33.42</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="detail_leftsec"></div>
                  <div className="detail_righsec"></div>
                </div>
                <div className="detail_body">
                  <table class="odds-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th class="back-header">BACK</th>
                        <th class="lay-header">LAY</th>
                        <th> </th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left team_namewidth">
                          West Indies A
                        </td>
                        <td>0</td>
                        <td colSpan="6" class="back subspended">
                          2.48
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left team_namewidth">
                          South Africa A
                        </td>
                        <td>0</td>
                        <td colSpan="6" class="back subspended">
                          2.48
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="right_sectabs cardbox">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="All_Bet-tab"
                    data-toggle="tab"
                    data-target="#All_Bet"
                    type="button"
                    role="tab"
                    aria-controls="All_Bet"
                    aria-selected="true"
                  >
                    All Bet
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="match-tab"
                    data-toggle="tab"
                    data-target="#match"
                    type="button"
                    role="tab"
                    aria-controls="match"
                    aria-selected="false"
                  >
                    match
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="Fancy-tab"
                    data-toggle="tab"
                    data-target="#Fancy"
                    type="button"
                    role="tab"
                    aria-controls="Fancy"
                    aria-selected="false"
                  >
                    Fancy
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="addFancy-tab"
                    data-toggle="tab"
                    data-target="#addFancy"
                    type="button"
                    role="tab"
                    aria-controls="addFancy"
                    aria-selected="false"
                  >
                    Add Fancy
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="liveuser-tab"
                    data-toggle="tab"
                    data-target="#liveuser"
                    type="button"
                    role="tab"
                    aria-controls="liveuser"
                    aria-selected="false"
                  >
                    Live User
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="All_Bet"
                  role="tabpanel"
                  aria-labelledby="All_Bet-tab"
                >
                  <div className="tab_contentmainsec">
                    <div className="search_filtesec">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Domain"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Selection"
                      />
                      <select name="" id="" className="form-control">
                        <option value=""> All</option>
                        <option value=""> India</option>
                        <option value=""> UAE</option>
                        <option value=""> UAE</option>
                        <option value=""> UAE</option>
                        <option value=""> UAE</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rate"
                      />
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date time"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Stake"
                      />
                    </div>
                    <div className="align-content-center d-flex filter_Sec justify-content-between py-2">
                      <div className="left_checkbox">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label" for="defaultCheck1">
                            Select All
                          </label>
                        </div>
                      </div>
                      <div className="right_filsec">
                        <div class="btn-group">
                          <button
                            type="button"
                            className="btn"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="material-icons mr-1">
                              filter_alt
                            </span>{" "}
                            <span> Filter</span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">
                              Action
                            </button>
                            <button className="dropdown-item" type="button">
                              Another action
                            </button>
                            <button className="dropdown-item" type="button">
                              Something else here
                            </button>
                          </div>
                        </div>
                        <button className="clearbtn btn">Clear</button>
                      </div>
                    </div>
                    <div className="table_secmain">
                      <div class="table-responsive">
                        <table class="table">
                          <caption>List of users</caption>
                          <thead>
                            <tr>
                              <th scope="col">Sr. No.</th>
                              <th scope="col">Order </th>
                              <th scope="col">Sale</th>
                              <th scope="col">Description</th>
                              <th scope="col">Support</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>1542</td>
                              <td>Sale Pitch - 2020</td>
                              <td>
                                Lorem ipsum dolor sit ametsLorem ipsum dolor sit
                                ametsLorem ipsum dolor sit amets
                              </td>
                              <td>+91-88888888</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="match"
                  role="tabpanel"
                  aria-labelledby="match-tab"
                >
                  match
                </div>
                <div
                  class="tab-pane fade"
                  id="Fancy"
                  role="tabpanel"
                  aria-labelledby="Fancy-tab"
                >
                  Fancy
                </div>
                <div
                  class="tab-pane fade"
                  id="addFancy"
                  role="tabpanel"
                  aria-labelledby="addFancy-tab"
                >
                  addFancy
                </div>
                <div
                  class="tab-pane fade"
                  id="liveuser"
                  role="tabpanel"
                  aria-labelledby="liveuser-tab"
                >
                  liveuser
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
