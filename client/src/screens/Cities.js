import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityAction } from "../store/actions/cityActions";
import Nav from "../components/Nav";
import City from "../components/City";

export class Cities extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCityAction();
  }

  render() {
    const { cities } = this.props;
    // console.log(this.props);
    return (
      <div>
        <Nav />
        <div className="filter">
          <input type="text" id="filter" placeholder="Find a city..."></input>
        </div>
        <div className="content">
          <div id="cityList">
            {cities.map((city, index) => {
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
