import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityAction } from "../store/actions/cityActions";
import Nav from "../components/Nav";
import City from "../components/City";

export class Cities extends Component {
  constructor() {
    super();
    /*screen-level state used to hold search query*/
    this.state = {
      search: "",
    };
  }

  componentDidMount() {
    this.props.getCityAction();
  }

  /*update state as user inputs search query*/
  handleSearch = (search) => {
    this.setState({ search });
    // console.log(search);
  };

  /*search bar function to return filtered list of cities that include query in city name or country name*/
  searchBar = () => {
    let search = this.props.cities.filter((cities) => {
      return (
        cities.name.toUpperCase().startsWith(this.state.search.toUpperCase()) ||
        cities.country.toUpperCase().startsWith(this.state.search.toUpperCase())
      );
    });
    return search;
  };

  /*cities screen structure*/
  render() {
    /*variable for all cities*/
    const { cities } = this.props;
    // console.log(this.props.cities);
    /*variable for filtered cities from search query*/
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
            /*fires search function upon user input*/
            onChange={(event) => this.handleSearch(event.target.value)}
          ></input>
        </div>
        <div className="city-content">
          <div className="city-itemlist">
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

/*subscribe screen to Redux store*/
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    cities: state.cities.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCityAction: () => dispatch(getCityAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
