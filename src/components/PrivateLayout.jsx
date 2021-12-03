import React from 'react'
import Tittle from './Tittle'
import PrivateRoute from './PrivateRoute'
import Sidebar from './Sidebar'



const PrivateLayout = ({children}) => {

    

    
    return (

        <PrivateRoute>
            <div className="privateLayout">
                <Tittle/>
                <div className="container-fluid">

                    <div className="row">
                    <Sidebar/>
                    <div className="col align-self-center adminCol">
                        {children}
                    </div>
                    </div>
                </div>
                
            </div>
        </PrivateRoute>

    )
}

export default PrivateLayout
