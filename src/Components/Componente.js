import React, {Component} from 'react';
import '../App.css';

const Componente = props => <h1 className="Main-title">{props.msg}</h1>;

/*class Componente extends Component{
    render(){
        return <h2>{this.props.msg}</h2>;
    }
}*/

export default Componente;