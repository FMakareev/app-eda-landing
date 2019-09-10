import React, { useEffect } from "react"


const getUnitName = (unit) => {
  switch (unit) {
    case("300"): {
      return "шт"
    }
    case("299"): {
      return "ч. л."
    }
    case("298"): {
      return "ст. л"
    }
    case("294"): {
      return "по вкусу"
    }
    case("292"): {
      return "мл"
    }
    case("288"): {
      return "зубчика"
    }
    case("287"): {
      return "г"
    }
    default: {
      return ""
    }
  }
}

const GetQuantity = (quantity) => {
  if (quantity > 0) {
    return `- ${quantity}`
  }
  return ""
}


const RecipeIngredientsItem = (value) => {

  return (<li className="recipe_ingredients-item">
    {value.name} {GetQuantity(value.quantity)} {getUnitName(value.unit)}
  </li>)
}


const sliceIngredients = (ingredients, isSlice) => {
  if (ingredients !== null) {
    if (isSlice) {
      return Object.entries(ingredients)
        .slice(0, 9)
    } else {
      return Object.entries(ingredients)
    }
  }
  return []
}


const GetMoreTitle = (_count) => {
  let count = _count > 9 && _count !== 11 ? parseInt(_count.toString()[_count.toString().length - 1]) : _count
  if (count > 1 && count < 5) {
    return "ингридиента"
  } else if (count > 4 || count === 0 || count === 11) {
    return "ингридиентов"
  } else if (count === 1) {
    return "ингридиент"
  }
}

export const RecipeIngredients = ({ ingredients, recipe }) => {

  const [isOpen, toggleList] = React.useState(false)

  useEffect(() => {
    toggleList(false)
  }, [recipe])

  return (
    <div className="recipe_ingredients f-grid-cell">
      <h3 className="recipe_ingredients-title title_h3">
        Ингредиенты
      </h3>
      <ul className="recipe_ingredients-list">
        {
          sliceIngredients(ingredients, !isOpen).map(
            ([key, value], index) => (<RecipeIngredientsItem
              key={index}
              {...value}
            />),
          )
        }

        {
          !!(ingredients && Object.entries(ingredients).length > 9) && !isOpen &&
          <li>
            <a
              onClick={(event) => {
                event.preventDefault()
                toggleList(!isOpen)
              }}
              className="recipe_ingredients-item recipe_ingredients-item--more"
              rel="noopener"
              aria-label={"рецепты на сайте"}
              target={"_blank"}
              href=""
            >
              И
              еще {Object.entries(ingredients).slice(9).length} {GetMoreTitle(Object.entries(ingredients).slice(9).length)}
            </a>
          </li>
        }
      </ul>
    </div>)
}

export default RecipeIngredients
