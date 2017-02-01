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
    console.log('props', props);
  }

  componentDidMount() {
    let modal = $("#exampleModal1");
    window.modalConfirm = new Foundation.Reveal(modal);
  }

  render() {
    return (
      <div className="reveal" id="exampleModal1" data-reveal>
        <Title data={'¿ Estas seguro/a ?'} clean={true}/>
        <div className="row">
          <div className="columns large-6">
            <Button style={'btn-confirm'} onClick={this.props.close} type="button" data={'CANCELAR'}/>
          </div>

          <div className="columns large-6">
            <Button style={'btn-confirm'} onClick={this.props.close} type="button" data={'ACEPTAR'}/>
          </div>

        </div>
      </div>
    )
  }
};
