import React from 'react';
import $ from 'jquery';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';


import '../../scss/components/PopUpConfirm.scss';
window.foundation = $.fn.foundation = require("exports?Foundation!../../../node_modules/foundation-sites/js/foundation.core.js");
require("expose?Reveal!../../../node_modules/foundation-sites/js/foundation.reveal.js");
require("expose?Keyboard!../../../node_modules/foundation-sites/js/foundation.util.keyboard.js");
require("expose?Box!../../../node_modules/foundation-sites/js/foundation.util.box.js");
require("expose?Triggers!../../../node_modules/foundation-sites/js/foundation.util.triggers.js");
require("expose?MediaQuery!../../../node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
require("expose?Motion!../../../node_modules/foundation-sites/js/foundation.util.motion.js");


export default class PopUpConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.childrens = [];
  }

  componentDidMount() {
    let modal = $("#confirmModal");
    window.modalConfirm = new Foundation.Reveal(modal);
    modal.on("closed.zf.reveal",(e)=> {
      this.childrens.forEach(child => child.resetState());
    })
  }

  addChild(child) {
    this.childrens.push(child);
  }

  blockButton(button) {
    this.childrens.forEach((child)=> {
      if(button.props.style != child.props.style) child.setState({disabled: true});
    });
  }

  releaseButton(button) {
    this.childrens.forEach((child)=> {
      if(button.props.style != child.props.style) child.setState({disabled: false});
    });
  }

  render() {
    return (
      <div className="reveal" id="confirmModal" data-reveal>
        <Title data={'¿ Estas seguro/a ?'} clean={true}/>
        <div className="row">
          <div className="columns large-6">
            <Button style={'btn-cancel'} enableActions={this.releaseButton.bind(this)} disabledActions={this.blockButton.bind(this)} lift={this.addChild.bind(this)} onClick={this.props.close} type="button" data={'CANCELAR'}/>
          </div>

          <div className="columns large-6">
            <Button style={'btn-confirm'} enableActions={this.releaseButton.bind(this)} disabledActions={this.blockButton.bind(this)} lift={this.addChild.bind(this)} onClick={this.props.confirm} type="button" data={'ACEPTAR'}/>
          </div>

        </div>
      </div>
    )
  }
};
