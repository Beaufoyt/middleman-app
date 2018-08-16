import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import scrollTop from '../helpers/scrollTop';
import { searchRecipes } from '../actions/recipes';

import PureComponent from './PureComponent';

class Home extends PureComponent {
    componentDidMount() {
        scrollTop();
    }

    handleNonGlobalSearch = () => {
        this.props.searchRecipes();
    }

    handleGlobalSearch = () => {
        this.props.searchRecipes(true);
    }

    render() {
        const searchButtonIconClass = `fa fa-${this.props.recipesAreLoading ? 'spinner fa-spin' : 'paper-plane'}`;
        console.log(this.props.recipeResult, 'made it');
        return (
            <div>
                <div className="home-page-container">
                    <div className="margin-bottom">
                        <span className="margin-right">This is the home page</span>
                        <button className="btn btn-success btn-icon margin-right" onClick={this.handleNonGlobalSearch} >
                            <i className={searchButtonIconClass} />
                            Fire an action
                        </button>
                        <button className="btn btn-info btn-icon margin-right" onClick={this.handleGlobalSearch} >
                            <i className={searchButtonIconClass} />
                            Fire a global loader action
                        </button>
                    </div>
                    <h4>{`Your new random number is: ${this.props.recipeResult}`}</h4>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    searchRecipes: PropTypes.func.isRequired,
    recipesAreLoading: PropTypes.bool.isRequired,
    recipeResult: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    recipeResult: state.recipes.searchResults,
    recipesAreLoading: state.recipes.areLoading,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        searchRecipes,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
