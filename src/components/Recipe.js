import React from 'react';

const Recipe = () => {
const recipe = {
    title : 'Delicious Pasta',
    imageUrl : 'https://images.unsplash.com/photo-1662197480393-2a82030b7b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsZnJlZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    ingredients: ['Pasta','Tomato Sauce','Parmesan Cheese','Basil'],
    instructions: ['Boil pasta in boiling water until al dente.',
    'Heat tomato sauce in pan.',
    'Drain pasta and add to sauce.',
    'Top with grated parmesan cheese and fresh basil leaves.',
    'Serve bot and enjoy!'


    ],



};
return(
    <div className="recipe-detail">
        <div className="recipe-image">
            <img src={recipe.imageUrl} alt={recipe.title}/>

        </div>
        <div className="recipe-info">
            <div className="recipe-ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, 
                    index) => (
                        <li key={index}>{ingredient}</li>


                                     ))}
                </ul>
            </div>
            <div className="recipe-instructions">
                <h2>Instructions</h2>
                <ol>
                {recipe.instructions.map((instructions, 
                    index) => (
                        <li key={index}>{instructions}</li>


                                     ))}


                </ol>
            </div>
        </div>
    </div>

);
};
export default Recipe;