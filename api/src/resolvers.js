/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const { models } = require("./db")

module.exports = {
  Query: {
    pets(_,__,ctx,info){
      return ctx.models.Pet.findMany()
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  User: {
    
  }
}
