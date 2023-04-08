import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";
import "./YoutubeItem.css";

const YoutubeList = (props) => {
  console.log(props);

  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
        />
      ))}
      {props.children}
    </div>
  );
};

export default YoutubeList;
