let React = require('react'),
    MovieList = require('./MovieList.jsx'),
    MovieListWillWatch = require('./MovieListWillWatch.jsx'),
    moviesData = require('./moviesData.js');
require('./MoviesApp.css');

var MoviesApp = React.createClass({
    getInitialState: function () {
        return {
            movies: moviesData,
            moviesWillWatch: [],
            listId: [],
        };
    },
    movieWillWatch: function (checkedId) {
        let moviesWillList = this.state.moviesWillWatch,
            moviesList = this.state.movies.moviesData,
            movieWillWatchId = this.state.listId,
            object,
            state;

        function addMovie () {
            for (let i = 0; i < moviesList.length; i++) {
                for (let key in moviesList[i]) {
                    if (key === 'id' && moviesList[i][key] === checkedId) {
                        object = {
                            id: moviesList[i][key],
                            title: moviesList[i]['title'],
                            rating: moviesList[i]['vote_average']
                        };
                        moviesWillList.push(object);
                        movieWillWatchId.push(checkedId);
                    }
                }
            }
        }

        function removeMovie () {
            for (let i = 0; i < moviesWillList.length; i++) {
                for (let key in moviesWillList[i]) {
                    if (key === 'id' && moviesWillList[i][key] === checkedId) {
                        moviesWillList.splice(i,1);
                        movieWillWatchId.splice(i,1);
                    }
                }
            }
        }

        if (moviesWillList.length != 0) {
            state = movieWillWatchId.includes(checkedId);
            console.log(state);
            if (!state) {
                addMovie();
            } else {
                removeMovie();
            }

        } else {
            addMovie();
        }

        this.setState({moviesWillWatch: moviesWillList});
    },
    render: function () {
        return (
            <div className="movie-app">
                <MovieList movies={this.state.movies} behavior={this.movieWillWatch}/>
                <MovieListWillWatch moviesWillWatch={this.state.moviesWillWatch}
                                    count={this.state.moviesWillWatch.length}/>
            </div>
        );
    },

});

module.exports = MoviesApp;
