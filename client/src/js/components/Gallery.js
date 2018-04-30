const React = require('react');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');
import AliceCarousel from 'react-alice-carousel';
import Image1 from '../../images/gallery_1.jpg';
import Image2 from '../../images/gallery_2.jpg';
import Image3 from '../../images/gallery_3.jpg';
import Image4 from '../../images/gallery_4.jpg';
import Image5 from '../../images/gallery_5.jpg';
import Image6 from '../../images/gallery_6.jpg';
import Image7 from '../../images/gallery_7.jpg';
import Image8 from '../../images/gallery_8.jpg';
import Image9 from '../../images/gallery_9.jpg';
import Image10 from '../../images/gallery_10.jpg';

class Gallery extends React.Component {
  constructor() {
    super();
  }

  render() {
    const responsive = {
      320: {
        items: 1
      }
    }

    return (
      <AliceCarousel
        responsive={responsive}
        autoPlay={false}
        duration={1000}
      >
        <img src={`${Image1}`}/>
        <img src={`${Image2}`} />
        <img src={`${Image3}`} />
        <img src={`${Image4}`} />
        <img src={`${Image5}`} />
        <img src={`${Image6}`} />
        <img src={`${Image7}`} />
        <img src={`${Image8}`} />
        <img src={`${Image9}`} />
        <img src={`${Image10}`} />
      </AliceCarousel>
    )
  }
}

module.exports = InjectChildComponent(Gallery, []);
