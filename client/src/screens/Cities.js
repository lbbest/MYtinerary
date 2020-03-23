import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityAction } from "../store/actions/cityActions";
import Nav from "../components/Nav";
import City from "../components/City";

export class Cities extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.props.getCityAction();
  }

  handleSearch = search => {
    this.setState({ search });
    // console.log(search);
  };

  searchBar = () => {
    let search = this.props.cities.filter(cities => {
      return (
        cities.name.toUpperCase().includes(this.state.search.toUpperCase()) ||
        cities.country.toUpperCase().includes(this.state.search.toUpperCase())
      );
    });
    return search;
  };

  render() {
    const { cities } = this.props;
    // console.log(this.props.cities);
    const filteredCities = this.searchBar();
    // console.log(filteredCities);
    return (
      <div>
        <Nav />
        <div className="filter">
          <input
            type="text"
            id="filter"
            placeholder="Find a city..."
            onChange={event => this.handleSearch(event.target.value)}
          ></input>
        </div>
        <div className="content">
          <div id="cityList">
            {cities &&
              filteredCities.map((city, index) => {
                return <City key={index} city={city} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    cities: state.cities.data
  };
};

const mapDispatchToProps = dispatch => ({
  getCityAction: () => dispatch(getCityAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
