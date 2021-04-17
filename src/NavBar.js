import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <button  className="navbar-brand">
            <img
              src="https://cdn.discordapp.com/attachments/760345424703127613/763604858371833856/logo.png"
              alt=""
              width="55px"
            />
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/cliente"
                >
                  Cliente
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/proveedor"
                >
                  Proveedor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/inventario"
                >
                  Inventario
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/venta"
                >
                  Ventas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
