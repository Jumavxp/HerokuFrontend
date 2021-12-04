
import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Sidebar = () => {
    
    const { logout } = useAuth0();

    return (
        <div className="col-2 sidebar">
           <div className="row row-cols-1">
                <div className="col"><br /><br /></div>
                <Link to="/products" className="col sidebarCol"><br /> Productos</Link>
                <div className="col"><br /><br /></div>
                <Link  to="/products/create-product"className="col sidebarCol"><br /> Crear Producto</Link>
                <div className="col"><br /><br /></div>
                <div className="col sidebarCol">
                    <button onClick={()=>logout({ returnTo:'http://localhost:3000/'})}  className="btn">Cerrar Sesion</button>
                </div>
               
           </div>
        </div>
    )
}

export default Sidebar
