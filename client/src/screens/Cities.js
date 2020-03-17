import React, { Component } from "react";
import Nav from "../components/Nav";
import City from "../components/City";

export class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }

  fetchCities = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch("http://localhost:5000/cities/all")
      .then(response => response.json())
      .then(result => this.setState({ cities: result, isFetching: false }))
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.fetchCities();
  }

  render() {
    console.log(this.state.cities);
    return (
      <div>
        <Nav />
        <div className="content">
          <h1>Cities</h1>
          {this.state.cities.map((city, index) => {
            return <City key={index} city={city} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cities;
