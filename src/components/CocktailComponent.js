

const CocktailComponent = ({cocktail}) => {

    return(
        <div id="cocktail-component">
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt="cocktail image"/>
            <ul>
                <ul>Ingredients: 
                    <li>{cocktail.strIngredient1}</li>
                    <li>{cocktail.strIngredient2}</li>
                    <li>{cocktail.strIngredient3}</li>
                    <li>{cocktail.strIngredient4}</li>
                    <li>{cocktail.strIngredient5}</li>
                    <li>{cocktail.strIngredient6}</li>
                    <li>{cocktail.strIngredient7}</li>
                    <li>{cocktail.strIngredient8}</li>
                    <li>{cocktail.strIngredient9}</li>
                    <li>{cocktail.strIngredient10}</li>
                    <li>{cocktail.strIngredient11}</li>
                    <li>{cocktail.strIngredient12}</li>
                    <li>{cocktail.strIngredient13}</li>
                    <li>{cocktail.strIngredient14}</li>
                    <li>{cocktail.strIngredient15}</li>
                </ul>
                <li>Instuctions: {cocktail.strInstructions} </li>
            </ul>
        </div>
    )    

};

export default CocktailComponent; 