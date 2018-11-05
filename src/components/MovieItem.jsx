let React = require('react');
require('./MoviesItem.css');

var MovieItem = React.createClass({
    getInitialState: function () {
        return {
            checked: false
        };
    },
    handleChangeState: function () {
        this.setState({checked: !this.state.checked});
        let checked = this.props.id;
        this.props.addMovie(checked);
    },
    render: function () {
        let linkImg = `https://image.tmdb.org/t/p/w500${this.props.image}`;
        return (
            <div className="movie-item">
                <img src={linkImg} className="movie-item__img" alt=""/>
                <div className="movie-item__wrap">
                    <h2 className="movie-item__title">{this.props.name}</h2>
                    <div className="movie-item__foot">
                        <p className="movie-item__rating">Rating: {this.props.rating}</p>
                        <label>
                            <input type="checkbox" name="movie" onChange={this.handleChangeState} />
                            <div className="movie-item__button" >Will Watch</div>
                        </label>
                    </div>
                </div>
            </div>
        );
    },

});

module.exports = MovieItem;