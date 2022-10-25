import React, {Component} from "react";

export default class Eventos extends Component {
    constructor (props) {
        super(props);
        this.state ={
            contador: 0
        }

    }

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return(
            <div>
                <h2>Eventos</h2>
                <p>{this.state.contador}</p>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        );
    }
}