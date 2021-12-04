import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {

    const { user  } = useAuth0();

    

    return (     
        
        
       

            <div className="container-fluid admin">
                <h3 className="row justify-content-center">                    
                    Welcome to Admin section                    
                </h3>
          
                <div className="row row-cols-1 justify-content-center adminBody">
                    <div className="col-3">
                        <img src={user.picture} alt={user.name} />
    
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                        <div className="col-3">
                            Que quieres hacer?
                        </div>
                </div>


            </div>

        
        
    )
}

export default Login
