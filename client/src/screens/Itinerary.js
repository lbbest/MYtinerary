import React, { Component } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Itin from "../components/Itin";

export class Itinerary extends Component {
  state = {
    itinerary: null,
  };
  componentDidMount() {
    let name = this.props.match.params.name;
    axios.get("http://localhost:5000/itineraries/" + name).then((res) => {
      this.setState({
        itinerary: res.data,
      });
    });
  }

  render() {
    const itinerary = this.state.itinerary ? (
      <div className="itemlist">
        {this.state.itinerary.map((itinerary, index) => {
          return <Itin key={index} itinerary={itinerary} />;
        })}
      </div>
    ) : (
      <div>
        <h3 className="itemlist">Loading itineraries...</h3>
      </div>
    );

    return (
      <div>
        <Nav />
        <div className="city-content">
          <h1 className="itineraryCity">{this.props.match.params.name}</h1>
          <div>{itinerary}</div>
        </div>
      </div>
    );
  }
}
