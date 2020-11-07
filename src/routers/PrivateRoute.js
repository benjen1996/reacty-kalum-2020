import PropTypes from 'prop-types';

import {Redirect, Route} from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({

    isAuthenticated,
    component: Component,
    ...rest

}) => {

    console.log(rest);
    return(
        <Route {...rest}

        component = { (props) => (
            (isAuthenticated) ? (<Component {...props} />) : (<Redirect to="/login"/>)
        )}

        />
    )
}


PrivateRoute.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}