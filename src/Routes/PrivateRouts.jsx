import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({ children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
      return  <progress className="progress progress-accent w-full" value="100" max="100"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login'  ></Navigate>
};

export default PrivateRouts;