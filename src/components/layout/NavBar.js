import React, { Component } from 'react'
import styled from "styled-components"



export default class NavBar extends Component {
    render() {
        return (

                  <nav className="navbar navbar-expand-md navbar-dark fixed top" style={{backgroundColor:"#ef5350"}}>
                    <a 
                      href="#"
                      className="navbar-brand col=sm-3 col-md-2 mr-o align-itens-center"
                      >
                          Pokedex
                    </a>
                  </nav>

        )
    }
}


