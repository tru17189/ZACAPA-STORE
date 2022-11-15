import React from 'react';
import '../css/Stores.css';
import ItMayOrMayNotTshirt from '../Images/product-image/ItMayOrMayNotTshirt.webp';

const GiftsCards = () => {
    return(
        <div>
            <h1 className='main-section-title'>Gifts cards</h1>
            <div class="grid-container">
                <div className="grid-item">
                    <h1 className='title-in-card'>It May Or May Not T-shirt, Blanco</h1>
                    <img src={ItMayOrMayNotTshirt} height='78%' width='100%' />
                </div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>  
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>  
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>  
            </div>
        </div>
    )
}

export default GiftsCards;