import React from "react"

export const RecipeIngredients = () => (
  <div className="recipe_ingredients f-grid-cell">
    <h3 className="recipe_ingredients-title title_h3">
      Ингредиенты
    </h3>
    <ul className="recipe_ingredients-list">
      <li className="recipe_ingredients-item">
        чеснок — 2 зубчик
      </li>
      <li className="recipe_ingredients-item">
        масло оливковое
      </li>
      <li className="recipe_ingredients-item">
        лук репчатый — 1 шт.
      </li>
      <li className="recipe_ingredients-item">
        помидоры в собственном соку — 250 г
      </li>
      <li className="recipe_ingredients-item">
        базилик
      </li>
      <li className="recipe_ingredients-item">
        черный перец
      </li>
      <li className="recipe_ingredients-item">
        тальятелле — 150 г
      </li>
      <li className="recipe_ingredients-item recipe_ingredients-item--more">
        И еще 8 ингредиентов
      </li>
    </ul>
  </div>)

export default RecipeIngredients;