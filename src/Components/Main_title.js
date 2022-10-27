import React from 'react';
import '../App.css';

const Main_title = props => 
<div className='Main-title'>
    <h1>{props.msg}</h1>
</div>

/*class Componente extends Component{
    render(){
        return <h2>{this.props.msg}</h2>;
    }
}*/

export default Main_title;