import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Tittle from './Tittle';

const PrivateRoute = ({children}) => {

    const { isAuthenticated, isLoading} = useAuth0();

    if (isLoading) return <div> ... Loading ...</div>;

    return isAuthenticated? (

        <>{children}</>

    ):(
           <div className="container">
               <Tittle/>
               <div className="row justify-content-center align-content-center authError">
                    <div class="col-5 alert alert-primary" role="alert">
                        No estas autorizado para continuar al sitio
                    </div>
               </div>
           </div>
    )

}

export default PrivateRoute
