import React from 'react';

import grill from '../assets/bbq2.png';
import french from '../assets/toast.jpg';
import pasta from '../assets/alfredo.jpg';
import veggies from '../assets/salad.jpg';
import cheese from '../assets/burger.jpg';
import drink from '../assets/lemonade.jpg';
import sweets from '../assets/cheesecake.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faFile,  faHeart, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

class RecipeCard extends React.Component {
  render() {
    
    return (
      <div className="Sidebar-div">
      <p className='logo'>fixrecipe</p>

        <nav className="Sidebar">
        <div className="icon">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faList} />
        <span>Categories</span>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faFile} />
        <span>Recipes</span>
      </div>
      
      <div className="icon">
        <FontAwesomeIcon icon={faHeart} />
        <span>Favorites</span>
      </div>
      
      <div className="icon">
        <FontAwesomeIcon icon={faUsers} />
        <span>Group</span>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </div>
        </nav>
        <nav className="header">

          <div className="grill"> <img src={grill} style={{position: 'absolute',width: '250px', height: '250px',left: '20px'}}  alt="diet"/></div>

          <div className="headerText">
            <p style={{ left: '2000px', right: '200px'}}>What will you like to cook today?</p>
            </div>
            <div className="subtext">
            <p style={{ left: '2000px', right: '200px'}}>Explore our various categories of recipes</p>
            </div>
            
        </nav>
        <div className="card7">
          <div className="Break">
          <img src={french} style={{position: 'relative',width: '100%',height: '149px',top:'0.5px', left: '0px',WebkitBorderRadius:'30px' }} alt ="breakfast" />
          <div className="text0">
            <p >Toast</p>
          </div>
          </div>
        </div>
        <div className="card8">
        <div className="Breakfast">
              <img src={pasta} style={{position: 'relative',width: '100%',height: '151px',top:'0.1px', left: '0px',WebkitBorderRadius:'20px' }} alt ="juices" />
              <div className="text0">
            <p>Alfredo</p>
          </div>
          </div>
        </div>
        <div className="card9">
        <div className="Breakfast">
              <img src={veggies} style={{position: 'relative',width: '100%',height: '151px',top:'0.1px', left: '0px',WebkitBorderRadius:'30px' }} alt ="choke" />
              <div className="text0">
            <p>Salad</p>
          </div>
          </div>
        </div>
        <div className="card10">
        <div className="Breakfast">
              <img src={cheese} style={{position: 'relative',width: '100%',height: '149px',top:'0.5px', left: '0px',WebkitBorderRadius:'30px' }} alt ="spag" />
              <div className="text0">
            <p>Burger</p>
          </div>
          </div>
        </div>
        <div className="card11">
        <div className="Breakfast">
              <img src={drink} style={{position: 'relative',width: '100%',height: '149px',top:'0.5px', left: '0px',WebkitBorderRadius:'30px' }} alt ="guacamole" />
              <div className="text0">
            <p>Lemonade</p>
          </div>
          </div>
        </div>
        <div className="card12">
        <div className="Breakfast">
              <img src={sweets} style={{position: 'relative',width: '100%',height: '151px',top:'0.1px', left: '0px',WebkitBorderRadius:'30px' }} alt ="guacamole" />
              <div className="text0">
            <p>Cheesecake</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}





export default RecipeCard;