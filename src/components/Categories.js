import React from 'react';

import cake from '../assets/Pancake.png';
import juice from '../assets/juice.png';
import choke from '../assets/artichoke.png';
import spaghetti from '../assets/spaghetti.png';
import guacamole from '../assets/guacamole.png';
import cheesecake from '../assets/cheesecake.png';
import diet from '../assets/diet2.png';










class Categories extends React.Component {
 
    render() {
      const text = "Breakfast";
      return (
        <div className="Sidebar-div">
          <nav className="Sidebar">
            {/* Sidebar content */}
            <p className='logo'>fixrecipe</p>
          </nav>
          <nav className="header">

          <div className="diet"> <img src={diet} style={{position: 'absolute',width: '250px', height: '250px',left: '-300px'}}  alt="diet"/></div>

            <div className="headerText">
              <p style={{ left: '2000px', right: '200px'}}>What will you like to cook today?</p>
              </div>
              <div className="subtext">
              <p style={{ left: '2000px', right: '200px'}}>Explore our various categories of recipes</p>
              </div>
              
          </nav>
          <div className="card">
            <div className="Breakfast">
            <img src={cake} style={{position: 'absolute',width: '90px', height: '90px' }} alt ="breakfast" />
            
            <div className="text">
              <p>{text}</p>
            </div>
            </div>
          </div>
          <div className="card2">
          <div className="Breakfast">
                <img src={juice} style={{position: 'absolute',width: '90px', height: '90px' }} alt ="juices" />
                <div className="text">
              <p>Fruit Juice</p>
            </div>
            </div>
          </div>
          <div className="card3">
          <div className="Breakfast">
                <img src={choke} style={{position: 'absolute',width: '90px', height: '90px' }} alt ="choke" />
                <div className="text">
              <p>Vegan</p>
            </div>
            </div>
          </div>
          <div className="card4">
          <div className="Breakfast">
                <img src={spaghetti} style={{position: 'absolute',width: '90px', height: '90px' }} alt ="spag" />
                <div className="text">
              <p>Lunch</p>
            </div>
            </div>
          </div>
          <div className="card5">
          <div className="Breakfast">
                <img src={guacamole} style={{position: 'absolute',width: '90px', height: '90px' }} alt ="guacamole" />
                <div className="text">
              <p>Dinner</p>
            </div>
            </div>
          </div>
          <div className="card6">
          <div className="Breakfast">
                <img src={cheesecake} style={{position: 'absolute',width: '90px', height: '90px' }} alt ="guacamole" />
                <div className="text">
              <p>Desserts</p>
            </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Categories;

