import React, { Component } from "react";

export default class Estado extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contador: 0
        };

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1,
            });
        }, 3000);
    }

    render() {
        return(
            <div>
                <h2>El estado {this.state.contador}</h2>
            </div>
        );
    }
}