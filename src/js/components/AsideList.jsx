import React from 'react';
import '../../scss/components/AsideList.scss';

export default class AsideList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="columns large-3 medium-12 small-12 section_options">
        <article>
          <nav>
            <ul>
              <li>
                <a href="/event/add" target="_blank">
                  <button className="btn_create_event">
                    <i className="material-icons">&#xE02E;</i>
                    <span>CREAR EVENTO</span>
                  </button>
                </a>
              </li>

              <li>
                <a href="/user/create" target="_blank">
                  <button className="btn_create_event">
                    <i className="material-icons">&#xE03B;</i>
                    <span>CREAR USUARIO</span>
                  </button>
                </a>
              </li>

              <li>
                <a href="/user/list" target="_blank">
                  <button className="btn_create_event">
                    <i className="material-icons">&#xE896;</i>
                    <span>LISTADO DE USUARIOS</span>
                  </button>
                </a>
              </li>

            </ul>
          </nav>
        </article>
      </section>
    )
  }
};
