import React, { Component } from "react";
import "./Typography.css";
import search from "./images/search.png";
import report from "./images/report.png";
import alertsbell from "./images/alertsbell.png";
import { fire, facebookProvider } from "components/Config/Fire";
import Typography from "views/Typography.jsx";
import { Redirect } from "react-router-dom";
import one from "./one.png";
import note from "./note.png";
import rep from "./rep.png";
class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="alert-1">
          <h4 class="alert-heading">Well done! 🎉 </h4>

          <p class="k">
            You are just one step away to help fight against counterfeiting.
          </p>
          <p class="k"> Follow these steps to get started:</p>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div class="container">
          <div class="col-md-3">
            <div class="card2">
              <a href="/admin/user">
                <div class="cardheader iconcolor2">
                  <img src={one} />
                </div>
                <div class="cardlinks">
                  <h1>Step-1: Search</h1>
                  <ul class="cardlist">
                    <li>
                      {" "}
                      Before reporting, check if this product exists in our
                      database. Proceed by entering the certificate details.
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card2">
              <a href="/admin/typography">
                <div class="cardheader iconcolor2">
                  <img src={rep} />
                </div>
                <div class="cardlinks">
                  <h1>Step-2: Report</h1>
                  <ul class="cardlist">
                    <li>
                      {" "}
                      If the details does not exist in the search results, then
                      proceed to Report the product by clicking here.
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card2">
              <a href="/admin/maps">
                <div class="cardheader iconcolor2">
                  <img src={note} />
                </div>
                <div class="cardlinks">
                  <h1>Step-3: All Alerts</h1>
                  <ul class="cardlist">
                    <li>
                      {" "}
                      You can check Alerts created by others here. This is a
                      great way to know what kind of products are hazardous.
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Notifications;
