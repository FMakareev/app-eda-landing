

export class RandomRecipe {
  prevRecipe = []
  newRecipe = []

  constructor(recipeList) {
    this.newRecipe = JSON.parse(JSON.stringify(recipeList))
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  getRandomId = () => {
    let index = this.getRandomInt(0, this.newRecipe.length)
    let result = this.newRecipe[index]
    this.prevRecipe = [...this.prevRecipe, ...this.newRecipe.splice(index, 1)]
    if (this.newRecipe.length === 0) {
      this.newRecipe = this.prevRecipe
      this.prevRecipe = []
    }
    console.log('newRecipe: ',this.newRecipe)
    return result
  }
}


export default RandomRecipe