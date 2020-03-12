import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

const { API_KEY } = '2caa57ac-0f99-48f3-9baa-8217978f9be9';
const API_URL = 'https://alert-amigo-api.herokuapp.com/products';

class UserProfile extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        results: []
      };
    }


  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=4`)
      .then(({ data }) => {
        this.setState({
          results: data.products
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 1) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <div className="content-margin">
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
      </div>
    )
  }
}

export default UserProfile
