import PropTypes from "prop-types"


export const cookingProcessPropTypes = PropTypes.shape({
  text: PropTypes.string,
  sort: PropTypes.string,
  image: PropTypes.string,
  recipe: PropTypes.string,
})

export  const recipeDataPropTypes = PropTypes.shape({
  chief: {
    id: PropTypes.string,
    name: PropTypes.string,
    photo_list: PropTypes.string,
  },
  cooking_process: PropTypes.arrayOf(cookingProcessPropTypes),
  recipes_ingredients: PropTypes.array,
  ingredients_categories: PropTypes.array,
  recipe: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    course: PropTypes.string,
    chief: PropTypes.string,
    video: PropTypes.string,
  }),
  ingredients: PropTypes.object,
});