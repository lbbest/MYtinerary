import React from "react";
import Commentlist from "./Commentlist";
import Commentform from "./Commentform";

export default function Commentbox() {
  return (
    <div className="commentBox" style={commentsBoxStyle}>
      <h3 style={commentsTitleStyle}>Comments</h3>
      <Commentlist />
      <Commentform />
    </div>
  );
}

const commentsBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignContent: "start",
  justifyContent: "start",
};

const commentsTitleStyle = {
  borderBottom: "1px solid black",
};
