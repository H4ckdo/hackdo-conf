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
import Image11 from '../../images/gallery_11.jpg';
import Image12 from '../../images/gallery_12.jpg';
import Image13 from '../../images/gallery_13.jpg';
import Image14 from '../../images/gallery_14.jpg';
import Image15 from '../../images/gallery_15.jpg';
import Image16 from '../../images/gallery_16.jpg';
import Image17 from '../../images/gallery_17.jpg';
import Image18 from '../../images/gallery_18.jpg';

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
        <img src={`${Image11}`} />
        <img src={`${Image12}`} />
        <img src={`${Image13}`} />
        <img src={`${Image14}`} />
        <img src={`${Image15}`} />
        <img src={`${Image16}`} />
        <img src={`${Image17}`} />
        <img src={`${Image18}`} />
      </AliceCarousel>
    )
  }
}

module.exports = InjectChildComponent(Gallery, []);
