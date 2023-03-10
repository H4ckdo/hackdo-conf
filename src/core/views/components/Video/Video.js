import React from "react";

class Video extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const videoWrapper = document.getElementById("videoWrapper");
    videoWrapper.innerHTML = `
        <iframe src="https://www.youtube.com/embed/n7ytI8lE3o4" height="100%" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
  }
  render() {
    return <div id="videoWrapper"></div>;
  }
}

export default Video;
