import React, { Component } from "react";

function Login() {
    return(
        <div><h3>LOGIN!</h3></div>
    );
}

function Logout() {
    return(
        <div><h3>LOGOUT!</h3></div>
    );
}

export default class RenderizadoCondicional extends Component{
    constructor (props) {
        super(props);
        this.state = {
            session: true
        };
    }

    render () {
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state ? <Login />: <Logout />}
            </div>
        );
    }
}