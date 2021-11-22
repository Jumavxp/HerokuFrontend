import { Link } from "react-router-dom"

const Layout = ({children}) => {
    return( 
      <div className="layout">          
        <div className="container-fluid">
            <div className="row align-items-center  logo">    

                <Link to="/" className="btn Inicio"  role="button">  
                        <h1 className="tittle">
                            Amazonia Fish
                        </h1>
                </Link>      
            </div>
            <div className="row justify-content-between banner">                
                           
                <Link className="col Inicio" to="/">
                    <button id="btn1" className="Inicio btn"> Pagina Principal</button>
                </Link>

                <div class="nav-item dropdown col Inicio">
                    <div class="dropdown-toggle "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </div>
                    <ul class="dropdown-menu Inicio" aria-labelledby="navbarDropdown">
                        <li><Link class="dropdown-item" to="/acuarios" >Acuarios</Link></li>
                        <li><Link class="dropdown-item" to="/plantas">Plantas</Link></li>
                        <li><Link class="dropdown-item" to="/peces">Peces Tropicales</Link></li>
                    </ul>
                </div>
                <Link className="col Inicio" to="/productos" >
                    <button  className=" Inicio btn" > Productos</button>
                </Link>
                  
                <Link className="col Inicio " to="/admin">
                    <button className="Inicio btn"> Admin</button>
                </Link>      
        
            </div>            
        </div>   
        <main>{children}</main>
        <footer className="container-flex footer">
            <div className="row justify-content-center">
                <div className="col-4">
                    <p> 
                        Amazonia Fish <span>Todos los derechos reservados</span> <span>2021</span>
                    </p>    
                </div>
            </div>
        </footer> 
      </div>
    )
}
export default Layout;