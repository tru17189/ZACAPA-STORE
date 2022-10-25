import React, { Component } from "react";
import data from "../helpers/data.json"

function ElementoLista (props) {
    return(
        <li>
            <a href={props.links.web}>{props.links.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component {
    constructor (props) {
        super(props);
        this.state = {
            seasons: ["Verano", "Primavera", "Otoño", "Invierno"]
        }
    }

    render() {
        console.log(data);
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año: </h3>
                <ol>
                    {this.state.seasons.map((season) => (
                        <li key={season}>{season}</li>
                    ))}
                </ol>
                <ul>
                    {data.frameworks.map((links) => (
                        <ElementoLista key={links.id} links={links}/>
                    ))}
                </ul>
            </div>
        );
    }
}