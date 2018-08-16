import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BrandLogo from './BrandLogo';
import NavLink from './NavLink';
import PureComponent from './PureComponent';

class Header extends PureComponent {
    render() {
        return (
            <div>
                { this.props.isGlobalLoading &&
                    <div className="global-loader" /> }
                <div id="header" className="header header-dark" />
                <div className="header-content-holder">
                    <BrandLogo />
                    <div className="header-nav">
                        <NavLink text="Home" path="/" />
                        <NavLink text="Recipes" path="/recipes" />
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    isGlobalLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isGlobalLoading: state.ui.globalLoading,
});

export default connect(mapStateToProps, null)(Header);
