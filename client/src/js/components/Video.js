const React = require('react');
const InjectChildComponent = require('./Inject.js');

class Video extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    const videoWrapper = document.getElementById('videoWrapper');
    videoWrapper.innerHTML =`
        <iframe src="https://www.youtube.com/embed/jZxADuoBzs0" height="100%" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen autoplay></iframe>    
    `
  }

  render() {
      let { LoadBar } = this.props;
    return (
        <div id="videoWrapper">
        </div>        
    )
  }
}

module.exports = InjectChildComponent(Video, [
    './LoadBar.js'
]);
