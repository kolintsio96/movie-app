var React = require('react');
require('./MoviesWillWatch.css');

var MovieListWillWatch = React.createClass({
    render: function () {
        return (
            <div className="movies-watch">
                <h2 className="movies-watch__count">Will Watch: {this.props.count} movies</h2>
                <div className="movies-watch__list">
                {
                    this.props.moviesWillWatch.map(function (movie) {
                        return <div key={movie.id} className="movies-watch__item">
                            <h3 className="movies-watch__title">{movie.title}</h3>
                            <p className="movies-watch__rating">{movie.rating}</p>
                        </div>
                    })
                }
                </div>
            </div>
        );
    },

});

module.exports = MovieListWillWatch;