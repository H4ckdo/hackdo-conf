import React from 'react';
import Header from '../components/Header.jsx';
import Title from '../components/Title.jsx';
import Footer from '../components/Footer.jsx';
import Feed from '../components/Feed.jsx';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header/>
          <Title data={this.props.title} narrow={this.props.narrow} left={this.props.left} right={this.props.right}/>
          <Feed content={this.props.content}/>
        </div>
        <Footer/>
      </div>
    )
  }
};
