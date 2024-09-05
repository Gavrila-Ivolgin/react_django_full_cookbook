import {useState, useEffect} from 'react';
import axios from 'axios';
import '../RecipesList/RecipesList.css';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/cookbook/recipes/')
            .then(res => {
                setRecipes(res.data);
            });
    }, []);

    return (
        <ul>
            {recipes.map(el => (
                <li key={el.id} className="recipe-item">
                    <h3 className="recipe-name">{el.name}</h3>
                    <p className="recipe-description">{el.description}</p>
                    <span className="recipe-category">Категория: {el.id_category}</span>
                    {/* Add buttons for edit and delete operations here */}
                </li>
            ))}
        </ul>
    );
};

export default RecipesList;