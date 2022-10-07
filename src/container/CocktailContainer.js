import { useEffect, useState } from "react";
import CocktailComponent from "../components/CocktailComponent";
import GetRandomCocktail from "../components/GetRandomCocktail";


const CocktailContainer = () => {

    const [cocktail, setCocktail] = useState("");

    const getRandomCocktail = async () => {
        const response = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const jsonCocktails = await response.json();
        setCocktail(jsonCocktails.drinks[0]);
    }

    useEffect(() => {
        getRandomCocktail();
    }, []);

    return (
        <>
            {cocktail?<CocktailComponent cocktail={cocktail} /> : <p>loading...</p> }
            <GetRandomCocktail onClick={getRandomCocktail} />
        </>
    )

};

export default CocktailContainer;