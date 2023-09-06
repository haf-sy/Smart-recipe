import React from 'react';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate to go to the "/Upload" route
    navigate('/Upload');
  }

  return (
    <div className="Sidebar-div">
      <nav className="Sidebar">
        {/* Add content for the Sidebar if needed */}
      </nav>
      <nav className="Sidebar2">
        <div className="text01">
          <p>Add your own recipe</p>
        </div>
        <div className="text02">
          <p>Upload your own home-made recipe and share it with other members of our community.</p>
        </div>
        <div>
          <button onClick={handleButtonClick}>
            Upload Now
          </button>
        </div>
      </nav>
      <div className="hero">
        {/* Add content for the hero section if needed */}
      </div>
      <div className="hero1">
        {/* Add content for hero1 section if needed */}
      </div>
      <div className="search">
        <div className="search1">
          {/* Add content for the search section if needed */}
        </div>
      </div>
    </div>
  );
};

export default Info;
