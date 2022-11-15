import React, {Component} from 'react';
import '../css/Stores.css';
import '../css/Categories.css';
import ManData from '../helpers/Hombre.json';

const Hombres = () => {
    return(
        <div>
            <h1 className='main-section-title'>Hombres</h1>
            <div className='grid-container-categories'>
            {ManData.ManMenu.map((category) => (
                <div className="grid-item-categories" 
                style={{backgroundImage: "url(" + require(`../Images/Menu/Man/${category.path}`) + ")"}}>
                    <h6>{category.title}</h6>
                </div>
            ))}
            </div>
            <div className='grid-container-stores'>
                <div className='grid-item-stores'>1</div>
                <div className='grid-item-stores'>2</div>
                <div className='grid-item-stores'>3</div>
                <div className='grid-item-stores'>4</div>
                <div className='grid-item-stores'>5</div>
                <div className='grid-item-stores'>6</div>
                <div className='grid-item-stores'>7</div>
                <div className='grid-item-stores'>8</div>
                <div className='grid-item-stores'>9</div>
                <div className='grid-item-stores'>10</div>
            </div>
        </div>
    )
}

export default Hombres;