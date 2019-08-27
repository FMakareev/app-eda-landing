import React from "react"


const getUnitName = (unit) => {
  switch (unit) {
    case('300'):{
      return 'шт';
    }
    case("299"):{
      return 'ч. л.';
    }
    case("298"):{
      return 'ст. л';
    }
    case("294"):{
      return 'по вкусу';
    }
    case("292"):{
      return 'мл';
    }
    case("288"):{
      return 'зубчика';
    }
    case("287"):{
      return 'г';
    }
    default:{
      return '';
    }
  }
}

const GetQuantity = (quantity) =>{
  if(quantity > 0){
    return `- ${quantity}`
  }
  return ''
}


const RecipeIngredientsItem = (value) => {

  return (<li className="recipe_ingredients-item">
    {value.name} {GetQuantity(value.quantity)} {getUnitName(value.unit)}
  </li>)
}


export const RecipeIngredients = ({ ingredients }) => {

  return (
    <div className="recipe_ingredients f-grid-cell">
      <h3 className="recipe_ingredients-title title_h3">
        Ингредиенты
      </h3>
      <ul className="recipe_ingredients-list">
        {
          ingredients &&
          Object.entries(ingredients)
            .slice(0, 9)
            .map(
              ([key, value], index) => (<RecipeIngredientsItem
                key={index}
                {...value}
              />),
            )
        }

        {
          !!(ingredients && Object.entries(ingredients).length > 9) &&
          <li>
            <a className="recipe_ingredients-item recipe_ingredients-item--more"
               rel="noopener"
               aria-label={"рецепты на сайте"}
               target={"_blank"}
               href="https://www.tveda.ru/recepty/"
            >
              И еще {Object.entries(ingredients).slice(9).length} ингредиентов
            </a>
          </li>
        }
      </ul>
    </div>)
}

export default RecipeIngredients