import React from 'react';
import '../../scss/components/Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="menu align-right">
            <li>
              <a href="#"><i className="material-icons">&#xE90F;</i> Cerrar sesion</a>
            </li>
            <li>
              <a href="/user"> <i className="material-icons">&#xE851;</i> Perfil </a>
            </li>

            <li className="active">
              <a href="/dashboard"> <i className="material-icons">&#xE8EF;</i> Dashboard </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
};
