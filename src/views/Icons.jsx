
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import './Typography.css';

import App from "components/App.js";

import Card from "components/Card/Card";
import { iconsArray } from "variables/Variables.jsx";

import {Redirect} from 'react-router-dom';


class Icons extends Component {


setRedirect (event) {
  console.log("this is an alert");
  const url = 'http://localhost:3001/';
    window.open(url, '_blank');
}


  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <div class="card88">
              <Card
                title="Status of your Alert"
                ctAllIcons
                category={
                  <span>
                    Check the status of your Alert on Blockchain
                    
                  </span>
                }
                content={
                  <Row>
                        <Col
                          lg={2}
                          md={3}
                          sm={4}
                          xs={6}
                          className="font-icon-list"
                        >
                          
                          <button type="submit" class="popup-status-button" onClick ={this.setRedirect}>Alert Status</button> 

                        </Col>
                     
                 
                  </Row>
                }
              />
              </div>
            </Col>
          </Row>
        </Grid>

      
      </div>
    );
  }
}

export default Icons;
