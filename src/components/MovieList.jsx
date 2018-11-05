var React = require('react');
var MovieItem = require('./MovieItem.jsx');

var MovieList = React.createClass({
    render: function () {
        let behavior = this.props.behavior;
        return (

            <div className="movie-list">
                {

                    this.props.movies.moviesData.map(function (movie) {
                        return <MovieItem key={movie.id} id={movie.id} name={movie.title} image={movie.backdrop_path}  rating={movie.vote_average} addMovie={behavior}/>
                    })
                }
            </div>
        );
    },

});

module.exports = MovieList;