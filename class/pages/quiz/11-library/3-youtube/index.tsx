// import React from "react";
import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)``;

export default function Library() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      playing
      controls
      width={800}
      height={600}
      muted={true}
    />
  );
}
