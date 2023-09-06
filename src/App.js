
import './App.css';
import React from 'react';
import Categories from './components/Categories';
import RecipeCard from './components/RecipeCard';
import Favorites from './components/Favorites';
import Upload from './components/Upload';
import Info from './components/Info';
import Recipe from './components/Recipe';
import UserProfile from './components/UserProfile';


import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Categories' element={<Categories />} />
        <Route path='/RecipeCard' element={<RecipeCard />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path='/info' element={<Info />} />
        <Route path='/Recipe' element={<Recipe/>} />
        <Route path='/UserProfile' element={<UserProfile/>} />


        

      </Routes>
    </Router>
  );
}

export default App;