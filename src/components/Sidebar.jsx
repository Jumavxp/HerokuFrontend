
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Sidebar = () => {
    
    const { logout } = useAuth0();

    return (
        <div className="col-2 sidebar">
           <div className="row row-cols-1">
                <div className="col"><br /><br /></div>
                <div className="col sidebarCol"><br /> Productos</div>
                <div className="col"><br /><br /></div>
                <div className="col sidebarCol"><br /> Categorias</div>
                <div className="col"><br /><br /></div>
                <div className="col sidebarCol"><br /> Cuentas</div>
                <div className="col"><br /><br /></div>
                <div className="col sidebarCol">
                    <button onClick={logout} className="btn">Cerrar Sesion</button>
                </div>
               
           </div>
        </div>
    )
}

export default Sidebar
