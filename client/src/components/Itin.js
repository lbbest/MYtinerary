import React from "react";

/*itin component structure*/
export default function Itin(props) {
  const itin = props.itinerary;
  return (
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
      <div style={itinExpand}>
        <p>View Activities</p>
      </div>
    </div>
  );
}

/*itin component styles*/
const itinStyle = {
  width: "100%",
  height: "25vh",
  border: "1px solid black",
  borderRadius: "5px",
  display: "grid",
  gridTemplateRows: "25% 25% 25% 25%",
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

const itinExpand = {
  gridRow: "4/5",
  gridColumn: "1/5",
  backgroundColor: "grey",
  width: "100%",
  height: "100%",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center"
};
