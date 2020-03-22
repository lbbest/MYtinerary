import React, { Component } from "react";
import Nav from "../components/Nav";
import City from "../components/City";

export class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      filter: ""
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
    this.timer = setInterval(() => this.fetchCities(), 60000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  handleFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  cityFilter = () => {
    let filter = this.state.cities.filter(cities => {
      return (
        cities.name.includes(this.state.filter) ||
        cities.country.includes(this.state.filter)
      );
    });
    return filter;
  };

  render() {
    const filteredCities = this.cityFilter();
    return (
      <div>
        <Nav />
        <div className="filter">
          <input
            type="text"
            id="filter"
            placeholder="Find a city..."
            value={this.state.filter}
            onChange={this.handleFilter}
          ></input>
        </div>
        <div className="content">
          <div id="cityList">
            {this.state.cities &&
              filteredCities.map((city, index) => {
                return <City key={index} city={city} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Cities;
