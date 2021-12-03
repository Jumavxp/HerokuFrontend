import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

const Layout = ({children}) => {

    const { loginWithRedirect } = useAuth0();


    return( 
      <div className="layout">          
        <div className="container-fluid">
            <div className="row align-items-center ">    

                <Link to="/" className="Inicio" >  
                        <h1 className="tittle">
                            Amazonia Fish
                        </h1>
                </Link>      
            </div>
            <div className="row justify-content-between banner">                
                           
                <Link className="col Inicio" to="/">
                    <div id="btn1" > Pagina Principal</div>
                </Link>

                <div className="nav-item dropdown col Inicio">
                    <div className="dropdown-toggle "  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </div>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item Inicio" to="/acuario" >Acuarios</Link></li>
                        <li><Link className="dropdown-item Inicio" to="/plantas">Plantas</Link></li>
                        <li><Link className="dropdown-item Inicio" to="/peces">Peces Tropicales</Link></li>
                    </ul>
                </div>
                <Link className="col Inicio" to="/productos" >
                    <div> Productos</div>
                </Link>
                  
                
                <button onClick={loginWithRedirect} className="col Inicio btn"> Iniciar Sesión</button>
                 
        
            </div>            
        </div>   
        <main>{children}</main>

        <footer className="container-flex  footer">
            <div className="row justify-content-center">
                <div className="col-4">

                    <p> 
                        Amazonia Fish 
                    </p>    
                    
                    <p>2021</p>
                </div>
                <div className="col-4">
                    <p>
                        Disclaimer
                    </p>
                    <hr />
                    <p>
                        Las imagenes fueron tomadas con propositos de aprendizaje unicamente y sus derechos corresponden a sus respectivos autores
                    </p>
                </div>
            </div>
        </footer> 
      </div>
    )
}
export default Layout;