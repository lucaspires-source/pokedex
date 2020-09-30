import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
export default class PokemonCard extends Component {

    state ={
        name:'',
        imageUrl:'',
        pokemonIndex:''
    }

    componentDidMount(){
        const {name,url} = this.props
        const pokemonIndex= url.split("/")[url.split("/").length -2]
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({ name, imageUrl, pokemonIndex })
    }
    render() {

        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        <div className="card-body">
                            <h6 className="card-title" class="text-capitalize" >{this.state.name}</h6>
                        </div>
                </div>
            </div>
        )
    }
}
