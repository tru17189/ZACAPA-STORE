import React from 'react';
import PropTypes from 'prop-types';
import Main_title from './Main_title';

export default function Horizontal_menu (props) {
    return(
        <div className='Bar-menu-horizontal'>
            <Main_title msg="ZACAPA STORE"/>
            <ul>
                <li><a href='#opcion1'>{props.opcion1}</a></li>
                <li><a href='#opcion2'>{props.opcion2}</a></li>
                <li><a href='#opcion3'>{props.opcion3}</a></li>
                <li><a href='#opcion4'>{props.opcion4}</a></li>
                <li><a href='#opcion5'>{props.opcion5}</a></li>
                <li><a href='#opcion6'>{props.opcion6}</a></li>
                <li><a href='#opcion7'>{props.opcion7}</a></li>
                <li><a href='#opcion8'>{props.opcion8}</a></li>
            </ul>
        </div>
    );
}

Horizontal_menu.defaultProps = {
    porDefecto: "Las props",
};

Horizontal_menu.propTypes = {
    opcion1: PropTypes.string.isRequired,
};