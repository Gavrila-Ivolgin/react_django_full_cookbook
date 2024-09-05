import RecipesList from "./components/RecipesList/RecipesList.jsx";
import AddRecipesForm from "./components/AddRecipesForm/AddRecipesForm.jsx";
import React from "react";

class App extends React.Component {


    render() {
        return (
            <>
                <RecipesList />
                {/*<AddRecipesForm />*/}
            </>
        );
    }
}

export default App;
