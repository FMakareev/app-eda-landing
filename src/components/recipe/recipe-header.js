import React from "react"
import IconReload from '../../images/icon-reload.svg';

export default () => (<div className="recipe_header">
  <h2 className="recipe_title title_h2">
    Тальятелле аль помодоро
  </h2>

  <div className="recipe_info">
    <div className="recipe_author">
      <div className="recipe_author-img-wrapper">
        <img
          className="recipe_author-img"
          src="https://i.pravatar.cc/40"
          alt=""
        />
      </div>
      <div className="recipe_author-name">Джанни Тицци</div>
      <button className="button recipe_reload-mobile-btn">
        <img className={'recipe_reload-icon'} src={IconReload} alt=""/>Другой рецепт
      </button>
    </div>

    <div className="recipe_cooking-time">
      Время приготовления: 15 мин
    </div>
    <div className="recipe_ingredients-count">
      Потребуется 17 ингредиентов
    </div>
  </div>
  <button className="button recipe_reload-btn">
    <img className={'recipe_reload-icon'} src={IconReload} alt=""/>Показать другой рецепт
  </button>
</div>)