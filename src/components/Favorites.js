import React from 'react';
import like from '../assets/fav.png';


class Favorites extends React.Component {
    render() {
        return (
            <div className='like'>
                <img src={like} style={{width:'700px',height:'500px'}} alt ="like" />
                <div className="cardFav"></div>
                <p className='favs'>Favorites </p>
                <p className='favsText'>You don’t have any favorites . Let’s explore the best recipes 
                   for your self.</p>
                   <div className='btn'>
                    <div className='text3'>
                        <p>Explore Now</p>

                    </div>
                   </div>
            </div>
            
            
        );
    }
}

export default Favorites;