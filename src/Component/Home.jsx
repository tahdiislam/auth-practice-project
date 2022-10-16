import React, { useContext } from 'react';
import { authContext } from './userContext';

const Home = () => {
    const {user} = useContext(authContext)
    return (
        <div>
          <h1>This is Home for {user?.displayName}</h1>  
        </div>
    );
};

export default Home;