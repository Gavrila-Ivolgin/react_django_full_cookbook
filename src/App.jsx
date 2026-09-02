import RecipesList from "./components/RecipesList/RecipesList.jsx";
import AddRecipesForm from "./components/AddRecipesForm/AddRecipesForm.jsx";
import SubscriptionPayment from "./components/SubscriptionPayment/SubscriptionPayment.jsx";
import React from "react";

class App extends React.Component {


    render() {
        return (
            <>
                <RecipesList />
                <SubscriptionPayment />
                {/*<AddRecipesForm />*/}
            </>
        );
    }
}

export default App;
