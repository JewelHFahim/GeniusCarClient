import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Spinner animation="grow" variant="success" />;
    }

    if(!user)
    {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default PrivateRoute;