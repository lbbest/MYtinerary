import React from "react";
import Activities from "./Activities";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

/*itin component structure*/
export default function Itin(props) {
  const itin = props.itinerary;
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
          <p>{itin.duration} hours</p>
          <p>{itin.price}</p>
        </div>
        <div style={itinHashtags}>
          {itin.hashtags.map((hashtag) => (
            <p style={itinHashtag}>#{hashtag}</p>
          ))}
        </div>
      </div>
      <div className="expansionpanel">
        <ExpansionPanel style={itinExpand}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>
              <strong>View Activities</strong>
            </p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={itinExpandBody}>
            <Activities
              city={props.itinerary.name}
              activities={props.itinerary.activities}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

/*itin component styles*/

const cardStyle = {
  border: "1px solid black",
  // borderRadius: "5px",
};

const itinStyle = {
  width: "100%",
  height: "25vh",
  display: "grid",
  gridTemplateRows: "1fr, 1fr, 1fr",
  gridTemplateColumns: "25% 25% 25% 25%",
  justifyItems: "center",
  alignItems: "center",
};

const itinPicture = {
  gridRow: "1/3",
  gridColumn: "1/2",
  height: "90%",
  width: "90%",
  borderRadius: "5px",
};

const itinUser = {
  gridRow: "3/4",
  gridColumn: "1/2",
  fontSize: "0.7em",
};

const itinTitle = {
  gridRow: "1/2",
  gridColumn: "2/5",
};

const itinInfo = {
  gridRow: "2/3",
  gridColumn: "2/5",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const itinHashtags = {
  gridRow: "3/4",
  gridColumn: "2/5",
  color: "#3c91e6",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const itinHashtag = {
  marginRight: "10px",
};

const itinExpand = {
  width: "100%",
  borderTop: "1px solid black",
  backgroundColor: "#14213d",
  color: "white",
};

const itinExpandBody = {
  display: "grid",
  gridRows: "1fr 1fr",
};
