const { PrismaClient } = require('@prisma/client')
const recipes = require('./src/cocktail-recipes.json')

const prisma = new PrismaClient()

async function main() {
  for (let recipe of recipes) {
    await prisma.recipe.create({
      data: {
        name: recipe.name,
        ingredients: recipe.ingredients,
        liquors: recipe.liquors,
        garnish: recipe.garnish,
        directions: recipe.directions
      }
    })
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })