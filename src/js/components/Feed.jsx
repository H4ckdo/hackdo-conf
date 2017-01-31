import React from 'react';
import '../../scss/components/Feed.scss';
import FormSearch from '../components/FormSearch.jsx';
import Event from '../components/Event.jsx';

export default class Feed extends React.Component {
  render() {
    return (
      <div className="row">
        {
          this.props.content.map((data, index)=> {
            return (<div key={index}>{data}</div>)
          })
        }
      </div>
    )
  }
};
