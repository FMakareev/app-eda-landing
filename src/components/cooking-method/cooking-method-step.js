import React from "react"

export const CookingMethodStep = () => (<li className="cooking-method_step">
  <div className="cooking-method_step-preview-wrapper">
    <div className="cooking-method_step-preview">
      <img
        className={"cooking-method_step-preview-img"}
        src="https://cdn.tveda.ru/thumbs/eb6/eb6e50fc7854466860edc9f78132d33d/308ea02cec2f797ac9372e18137b4efb.jpg"
        alt=""
      />
    </div>
    <div className="cooking-method_step-count">
      1
    </div>
  </div>
  <div className="cooking-method_step-content">
    Чеснок очищаем и давим, обжариваем на оливковом масле. Лук нарезаем мелкими кубиками, добавляем к чесноку.
    Добавляем томаты в с/с, слегка давим их. Добавляем базилик, нарвав его руками, чёрный молотый перец и соль.
    Тушим под крышкой 5-10 минут.
  </div>
</li>)


export default CookingMethodStep