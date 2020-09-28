import React, { Component } from 'react'
import styled from "styled-components"



export default class NavBar extends Component {
    render() {
        return (
            <div>
                  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed top" style={{backgroundColor:"red"}}>
                      <a>Pokedex</a>
                  </nav>
            </div>
        )
    }
}

