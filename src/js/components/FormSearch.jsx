import React from 'react';
import '../../scss/components/FormSearch.scss';
import Input from '../components/Input.jsx';

export default class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.childrens = [];
    this.state = {
      error: false,
      warning: false,
      msgStyle: 'valid',
      valid: false,
      value: ''
    };
    this.props.lift(this);
  }

  bindValue(self) {
    return function (e) {
      let canditate = e.target.value;
      if(canditate.length === 0) return self.showWarning();
      let isValid = self.validate(canditate);
      if(isValid) {
       self.hideMsg();
        self.setState({value: canditate, valid: true});
      } else {
       self.showError();
      }
    };
  }

  validate(canditate) {
    return this.props.pattern(canditate) && canditate.length > 3 && canditate.length < 15;
  }

  hideMsg() {
    this.setState({error: false, warning: false, msgStyle: 'valid'})
  }

  showError() {
    this.setState({error: true, warning: false, msgStyle: 'invalid', valid: false})
  }

  showWarning() {
    this.setState({error: false, warning: true, msgStyle: 'empty', valid: false})
  }

  addChildren(child) {
    this.childrens.push(child);
  }

  render() {
    return (
      <div>
        <form className="form-search" onSubmit={this.props.onSubmit.bind(this)}>
          <div className="static-height_search">
            <Input lift={this.addChildren.bind(this)} param="event" type="text" pattern={this.props.pattern.bind(this)} placeholder={this.props.placeholder}  title={this.props.title}/>
          </div>

          <div className="row static-height_options">
            {
              this.props.options.map((option, index)=> {
                return (
                  <div className={"columns large-"+(12/this.props.options.length)} key={index}>
                    {option}
                  </div>
                )
              })
            }
          </div>
        </form>
      </div>
    )

  }
};

