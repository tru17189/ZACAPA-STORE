import React, {Component} from 'react';
import PropTypes, { func } from 'prop-types';
import Main_title from '../Main_title';
import data from "../../helpers/data.json"

function ElementsHorizontalMenu (props) {
    return(
        <li>
            <a href={props.links.web}>{props.links.name}</a>
        </li>
    )
}

export default class Horizontal_menu extends Component{
    render () {
        return(
            <div className='Bar-menu-horizontal'>
                <Main_title msg="ZACAPA STORE"/>
                <ul>
                    {data.frameworks.map((links) => (
                        <ElementsHorizontalMenu key={links.id} links={links}/>
                    ))}
                </ul>
            </div>
        );
    }
}