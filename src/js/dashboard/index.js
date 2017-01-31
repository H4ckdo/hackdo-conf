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
  }
];

class Dashboard {
  pattern(candidate) {
    return !(new RegExp(/(\W)/g).test(candidate));
  }

  addFormSearchChildren(child) {
    this.FormSearch.childrens.push(child);
  }

  constructor() {
    this.FormSearch = {};
    this.FormSearch.childrens = [];
    ReactDOM.render(
      <FormSearch placeholder="Buscar Evento" lift={self => this.FormSearch.self = self} onSubmit={this.search.bind(this)} pattern={this.pattern.bind(this)}  options={
          [
            <InputDate lift={this.addFormSearchChildren.bind(this)} />,
            <InputLocation lift={this.addFormSearchChildren.bind(this)} pattern={this.pattern.bind(this)} placeholder="Buscar por lugar" title="Debes escribir como minimo 3 caracteres y maximo 15, solo se permiten caracteres de la 'a' hasta la 'z', numeros del 0 al 9, sin espacios."/>
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
    let data = {};
    if(this.FormSearch.self.state.valid) data.name = this.FormSearch.self.state.value;
    this.FormSearch.childrens.forEach(child => {
      if(child.state.valid) data[child.state.param] = child.state.value;
    });
    console.log('data', data);
  }
};


$(document).ready(()=> new Dashboard());
