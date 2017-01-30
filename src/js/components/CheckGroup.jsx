import React from 'react';
import CheckOptions from './CheckOptions.jsx';
import '../../scss/components/CheckGroup.scss';

export default class CheckGroup extends React.Component {
  constructor(props) {
    super(props);
    this.childrens = [];
  }

  updateCheck(parent) {
    return function childScope() {
      let child = this;
      parent.childrens.forEach((current, index)=> {
        current.setState({checked: index === child.props.identification})
      })
    }
  }

  pickChilds(parent) {
    return ((child)=> parent.childrens.push(child));
  }

  render() {
    this.state = {};
    return (
      <div className="wrap-search-options">
        {
          this.props.options.map((option, index)=> <CheckOptions giveChilds={this.pickChilds(this)} onChange={this.updateCheck(this)} key={index} identification={index} name={option.name} checked={option.checked}/>)
        }
      </div>
    )
  }
}
