import '../../scss/dashboard/dashboard.scss';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import InputDate from '../components/InputDate.jsx';
import Input from '../components/Input.jsx';
import Layout from '../components/Layout.jsx';
import FormSearch from '../components/FormSearch.jsx';
import AsideList from '../components/AsideList.jsx';
import Event from '../components/Event.jsx';
import Button from '../components/Button.jsx';
import PopUp from '../components/PopUp.jsx';

const data = [
  {
    name: 'QUIBDO_JS',
    id: 1,
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
    this.childrens = [];
  }

  pattern(candidate) {
    return !(new RegExp(/(\W)/g).test(candidate));
  }

  patternLocation(candidate) {
    return !(new RegExp(/[^A-Za-z0-9_-\s#]/g).test(candidate));
  }

  addChildren(child) {
    this.childrens.push(child);
  }

  search(e) {
    e.preventDefault();
   console.log('this', this);
  }

  close() {
    window.modalConfirm.close();
  }

  request() {
    // let PopUpButtons = this;
    // if(PopUpButtons.state.loading === false && PopUpButtons.state.fail) {
    //   PopUpButtons.setFail();
    // } else {
    //   PopUpButtons.setLoading();
    // }
    // setTimeout(()=>{

    //   PopUpButtons.resetState();
    //   window.modalConfirm.close();
    // }, 2000);
  }

  requestMore() {
    console.log("request more")
  }

  deleteEvent(event, index) {
    console.log('this', this);
  }

  render() {
    let title= `
      Debes escribir como minimo 3 caracteres y maximo 15,
      solo se permiten caracteres de la 'a' hasta la 'z',
      numeros del 0 al 9, sin espacios.
    `;

    return (
      <section className="columns large-6 medium-12 small-12 section-feed">
        <div>
          <div className="large-centered form-search_container">
          <div className="container_events">
            <div id="event-wrapper" className="event">
              <FormSearch component="FormSearch" placeholder="Buscar Evento" param="name" title={title} lift={this.addChildren.bind(this)} onSubmit={this.search.bind(this)} pattern={this.pattern.bind(this)}  options={
                  [
                    <Input component="InputDate" lift={this.addChildren.bind(this)} param="startAt" type="date" />,
                    <Input component="InputLocation" lift={this.addChildren.bind(this)} param="location" type="text" pattern={this.patternLocation.bind(this)} placeholder="Buscar por lugar" title={title}/>
                  ]
                } />
               <Event data={data} delete={this.deleteEvent.bind(this)} lift={this.addChildren.bind(this)}/>
            </div>{/* end event */}
            <Button style={'btn-loadmore'} onClick={this.requestMore} type="button" data={'CARGAR MAS'}/>
          </div>{/* end container_events */}
          </div> {/* end form-search_container */}
        </div>
      </section>
    )
  }
};

$(document).ready(()=> {
  ReactDOM.render(
    <Layout title={'DASHBOARD'} narrow={true} content={[
      <AsideList/>,
      <Dashboard/>
    ]}/>,
    document.getElementById('app')
  );
});
