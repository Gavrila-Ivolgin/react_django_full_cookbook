import axios from "axios";
import {useState} from "react";

const AddRecipesForm = () => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/cookbook/recipes/', { name })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipesForm;