import '../../scss/dashboard/dashboard.scss';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import InputDate from '../components/InputDate.jsx';
import CheckGroup from '../components/CheckGroup.jsx';
import InputLocation from '../components/InputLocation.jsx';
import FormSearch from '../components/FormSearch.jsx';
import Footer from '../components/Footer.jsx';


let options = [
  {
    name: 'One',
    checked: true
  },
  {
    name: 'Two',
    checked: false
  }
];

class Dashboard {
  pattern(candidate) {
    return !(new RegExp(/(\W)/g).test(candidate));
  }

  addChildren(child) {
    return child => this.childrens.push(child);
  }

  constructor() {
    this.childrens = [];
    ReactDOM.render(
      <FormSearch placeholder="Buscar Evento" onSubmit={this.search} pattern={this.pattern.bind(this)}  options={
          [
            <InputDate />,
            <InputLocation pattern={this.pattern.bind(this)} placeholder="Buscar por lugar" title="Debes escribir como minimo 3 caracteres y maximo 15, solo se permiten caracteres de la 'a' hasta la 'z', numeros del 0 al 9, sin espacios."/>
          ]
        } />,
      document.getElementById('root')
    );

    ReactDOM.render(
      <Footer/>,
      document.getElementById('containder-footer')
    );
  }

  search(e) {
    e.preventDefault();
    console.log('this', this);
  }
};


$(document).ready(()=> new Dashboard());
