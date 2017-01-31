import React from 'react';
import '../../scss/components/LoadMore.scss';

export default class LoadMore extends React.Component {
  render() {
    return (
      <div className="container-loadmore text-center">
        <button className="container-loadmore_btn">
          <i className="material-icons">&#xE8FA;</i>
          <span>CARGAR MAS</span>
        </button>
      </div>
    )
  }
}
