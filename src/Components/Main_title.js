import React, {Component} from 'react';
import '../App.css';

const Main_title = props => 
<div className='Bar-menu-horizontal'>
    <h1 className="Main-title">{props.msg}</h1>
</div>

/*class Componente extends Component{
    render(){
        return <h2>{this.props.msg}</h2>;
    }
}*/

export default Main_title;