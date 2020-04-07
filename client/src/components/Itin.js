import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

/*itin component structure*/
export default function Itin(props) {
  const itin = props.itinerary;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div style={cardStyle}>
      <div className="itin" style={itinStyle}>
        <h2 style={itinTitle}>{itin.title}</h2>
        <img src={itin.picture} alt="User" style={itinPicture}></img>
        <p style={itinUser}>
          Created by:<br></br>
          <strong>{itin.user}</strong>
        </p>
        <div style={itinInfo}>
          <p>Likes: {itin.likes}</p>
          <p>{itin.duration} hours</p>
          <p>{itin.price}</p>
        </div>
        <div style={itinHashtags}>
          {itin.hashtags.map(hashtag => (
            <p style={itinHashtag}>#{hashtag}</p>
          ))}
        </div>
      </div>
      <div className="activities" style={itinActivities}>
        <ExpansionPanel style={itinExpand}>
          <ExpansionPanelSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>View Activities</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Carousel responsive={responsive} style={itinCarousel}>
              <div style={itinCarouselItem}>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
            </Carousel>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

/*itin component styles*/

const cardStyle = {
  border: "1px solid black",
  borderRadius: "5px"
};

const itinStyle = {
  width: "100%",
  height: "20vh",
  display: "grid",
  gridTemplateRows: "1fr, 1fr, 1fr",
  gridTemplateColumns: "25% 25% 25% 25%",
  justifyItems: "center",
  alignItems: "center"
};

const itinPicture = {
  gridRow: "1/3",
  gridColumn: "1/2",
  height: "90%",
  width: "90%",
  borderRadius: "5px"
};

const itinUser = {
  gridRow: "3/4",
  gridColumn: "1/2",
  fontSize: "0.7em"
};

const itinTitle = {
  gridRow: "1/2",
  gridColumn: "2/5"
};

const itinInfo = {
  gridRow: "2/3",
  gridColumn: "2/5",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "100%"
};

const itinHashtags = {
  gridRow: "3/4",
  gridColumn: "2/5",
  color: "blue",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap"
};

const itinHashtag = {
  marginRight: "10px"
};

const itinActivities = {
  width: "100%"
};

const itinExpand = {
  width: "100%",
  borderTop: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const itinCarousel = {
  height: "100px",
  width: "100px",
  backgroundColor: "red"
};

const itinCarouselItem = {
  height: "100px",
  width: "100px",
  backgroundColor: "red"
};
