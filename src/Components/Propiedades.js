import React from 'react';

export default function Propiedades (props) {
    return(
        <div>
            <ul className='Bar-menu-horizontal'>
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

Propiedades.defaultProps = {
    porDefecto: "Las props",
};