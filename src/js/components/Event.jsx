import React from 'react';
import '../../scss/components/Event.scss';

export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = this.props.data;
  }

  delete() {

  }

  close() {
    console.log("close");
  }

  confirm() {
    console.log("confirm");
  }

  render() {
    return (
      <div className="event-wrap">
        {
          this.state.data.map((event, index) => {
            return (
              <div key={index}>
                  <div className="row container-event-header">
                    <div className="columns large-8 wrap-event-header">
                      <h1 className="container-event-header_title">{event.name}</h1>
                      <div className="container-event-header_attributes">
                        <div className="wrap_header_date">
                          <i className="material-icons">&#xE916;</i>
                          <span className="container-event-header_date">{event.startAt}</span>
                        </div>{/* end wrap_header_date */}

                        <div className="wrap_header_location">
                          <i className="material-icons">&#xE0C8;</i>
                          <span className="container-event-header_location">{event.location}</span>
                        </div>{/* end wrap_header_location */}
                      </div>{/* end wrap-event-header */}
                    </div>{/* end container-event-header */}

                    <div className="columns large-4 container-event-options">
                      <div className="wrap-event-options">
                         <div className="wrap-event-options_delete" onClick={this.delete.bind(this)}>
                           <i className="material-icons">&#xE872;</i>
                           <span onClick={this.props.delete.bind(this, event, index)}>Eliminar</span>
                         </div>

                          <div className="wrap-event-options_edit">
                            <a target="_blank" href={"/event/edit?eid="+event.id}>
                              <i className="material-icons">&#xE22B;</i>
                              <span>Editar</span>
                             </a>
                          </div>
                      </div> {/* end wrap-event-options */}
                    </div> {/* end container-event-options */}
                  </div>{/*end container-event-header */}
                  <p className="event_description"> {event.description} </p>{/*end event_description */}
              </div>
            )
          })
        }
      </div>
    )
  }
};
