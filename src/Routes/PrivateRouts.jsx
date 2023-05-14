import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouts = ({ children}) => {
  let navigate = useNavigate();
  let location = useLocation();
    const {user, loading} = useContext(AuthContext)
    if(loading){
      return  <progress className="progress progress-accent w-full" value="100" max="100"></progress>
    }
    if(user?.email){
        return children
    }
    return   <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouts;