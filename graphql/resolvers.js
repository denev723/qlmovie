const { getMovies, getById, addMovie } = require("./db");

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: () => getById,
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

export default resolvers;
