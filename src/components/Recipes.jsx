import React from 'react';

import scrollTop from '../helpers/scrollTop';

import PureComponent from './PureComponent';

class Recipes extends PureComponent {
    componentWillMount() {
        console.log('made it to the recipe page');
    }

    componentDidMount() {
        scrollTop();
    }

    render() {
        return (
            <div className="recipes-page">
                This is the recipe page
            </div>
        );
    }
}

export default Recipes;
