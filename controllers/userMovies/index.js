const usersMovie = require('../../models').users_movie;
const movie = require('../../models').movie;


exports.movies = function(req, res, next) {
  return usersMovie
    .findAll( {
      where: { user_id: req.session.passport.user },
      include: 'movie',
      order: [['createdAt', 'DESC']] 
     })
    .then((userMovies) => { console.log(userMovies)
      const userMovieArray = [];
      userMovies.forEach((userMovie) => {
        userMovieArray.push(userMovie.dataValues)
      })
      return userMovieArray
    }
    )
    .then( (userMovieArray) => res.render( "userMovies/index", {user: req.session.passport.user, userMovieList: userMovieArray, title: "Movie List"}));
};