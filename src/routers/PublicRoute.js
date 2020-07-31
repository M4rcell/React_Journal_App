import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {

     
    return (
        <Route {...rest}

          component={(props)=>(
              
            (isAuthenticated)
            ? (<Redirect to="/" />) //si esta autentificado y no es ruta publica _-sacar a /
            :(<Component {...props}/>) //si esta autetificado manda todo los props
                
              
          )}
        />
    )
}

PublicRoute.propTypes={

    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}
