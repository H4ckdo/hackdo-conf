import '../../scss/dashboard/dashboard.scss';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import InputDate from '../components/InputDate.jsx';
import InputLocation from '../components/InputLocation.jsx';
import Layout from '../components/Layout.jsx';
import FormSearch from '../components/FormSearch.jsx';
import AsideList from '../components/AsideList.jsx';
import Event from '../components/Event.jsx';
import LoadMore from '../components/LoadMore.jsx';


const data = [
  {
    name: 'QUIBDO_JS',
    startAt: '2017-02-17',
    location: 'Camara de Comercio',
    description:`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Optio sunt, error eius temporibus,
      voluptate illo consectetur dicta mollitia perferendis dolores repellendus numquam?
      Rem dolor autem earum vitae numquam natus similique.
    `
  }
]


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.FormSearch = {};
    this.FormSearch.childrens = [];
  }

  pattern(candidate) {
    return !(new RegExp(/(\W)/g).test(candidate));
  }

  addFormSearchChildren(child) {
    this.FormSearch.childrens.push(child);
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

  render() {
    return (
      <section className="columns large-6 medium-12 small-12 section-feed">
        <div>
          <div className="large-centered form-search_container">
          <div className="container_events">
            <div id="event-wrapper" className="event">
              <FormSearch placeholder="Buscar Evento" lift={self => this.FormSearch.self = self} onSubmit={this.search.bind(this)} pattern={this.pattern.bind(this)}  options={
                  [
                    <InputDate lift={this.addFormSearchChildren.bind(this)} />,
                    <InputLocation lift={this.addFormSearchChildren.bind(this)} pattern={this.pattern.bind(this)} placeholder="Buscar por lugar" title="Debes escribir como minimo 3 caracteres y maximo 15, solo se permiten caracteres de la 'a' hasta la 'z', numeros del 0 al 9, sin espacios."/>
                  ]
                } />,
              <Event data={data}/>
            </div>{/* end event */}
            <LoadMore/>
          </div>{/* end container_events */}
          </div> {/* end form-search_container */}
        </div>
      </section>
    )
  }
};

$(document).ready(()=> {
  ReactDOM.render(
    <Layout title={'DASHBOARD'} content={[
      <AsideList/>,
      <Dashboard/>
    ]}/>,
    document.getElementById('app')
  );
});
