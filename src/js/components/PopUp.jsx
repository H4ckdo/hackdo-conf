import React from 'react';
import $ from 'jquery';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import '../../scss/components/PopUp.scss';

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
    this.component = "PopUp";
  }

  componentDidMount() {
    let modal = $("#"+this.props.id);
    window.modalConfirm = new Foundation.Reveal(modal);
    modal.on("closed.zf.reveal",(e)=> {
      this.childrens.forEach(child => child.resetState());
    })
    if(this.props.lift) this.props.lift(this);
    window.modalConfirm.open();
  }

  open() {
    window.modalConfirm.open();
  }

  addChildren(child) {
    this.childrens.push(child);
  }

  render() {
    let style = this.props.type || "hide";
    return (
      <div className="reveal popup text-center" id={this.props.id} data-reveal>


        <div className={style === "form" ? "form" : "hide"}>
          <Title data={this.props.title} clean={true}/>
          {this.props.data}
        </div>

        <div className={style === "warning" ? "warning" : "hide"}>
          <Title data={<i className="material-icons warning-icon">&#xE002;</i>} clean={true}/>
          {this.props.data}
          <Button style="btn-warning" lift={this.addChildren.bind(this)} onClick={this.props.close} type="button" data="CERRAR"/>
        </div>


        <div className={style === "error" ? "error" : "hide"}>
          <Title data={<i className="material-icons error-icon">&#xE5C9;</i>} clean={true}/>
          {this.props.data}
          <Button style="btn-cancel" lift={this.addChildren.bind(this)} onClick={this.props.close} type="button" data="CERRAR"/>
        </div>


        <div className={style === "confirm" ? "confirm" : "hide"}>
          <Title data="¿ Estas seguro/a ?" clean={true}/>
          <div className="row">
            <div className="columns large-6">
              <Button style="btn-cancel" lift={this.addChildren.bind(this)} onClick={this.props.close} type="button" data="CANCELAR"/>
            </div>

            <div className="columns large-6">
              <Button style="btn-confirm" lift={this.addChildren.bind(this)} onClick={this.props.confirm} type="button" data="ACEPTAR"/>
            </div>
          </div>
        </div>

      </div>
    )
  }
};
