import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from './userContext';

const Home = () => {
    const {user} = useContext(authContext)
    if(!user && !user?.uid){
      return <Navigate to='/login'/>
    }
    return (
        <div>
          {user?.uid ? <h1 className='text-5xl font-bold my-4'>This is Home for {user?.email}</h1> : <h1 className='text-5xl font-bold my-4'>This is Home.</h1>}  
        </div>
    );
};

export default Home;