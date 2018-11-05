let ReactDOM = require('react-dom'),
    React = require('react'),
    MoviesApp = require('./components/MoviesApp.jsx');

ReactDOM.render(
    <MoviesApp />,
    document.getElementById('MovieList')
);