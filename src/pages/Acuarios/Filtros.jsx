import React from 'react'
import Data from "../../data/DataAcuarios/FiltrosData.json"
import externo from "../../assets/Filtro-externo-para-acuario.jpg"
import interno from "../../assets/filtro-interno.jpg"
import arrow from "../../assets/2561330_arrow_left_icon (1).png"
import { Link } from 'react-router-dom'

const Filtros = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {Data.map(post=>{
                    return(
                        <div className="col-6 acuarofilia" key={post.id}>
                            <h2>{post.tittle1}</h2>
                            <p>{post.s1p1}</p>
                            <p>{post.s1p2}</p>
                            <br /><hr /><br />
                            <h2>{post.tittle2}</h2>
                            <p>{post.s2p1}</p>
                            <br />
                        </div>
                    )
                })}                
            </div>
            <div className="row justify-content-center ">
                
                    <div className="col-3">
                        <h4>Ventajas</h4>
                        <hr />
                        <ul>
                            <li>Silenciosos. El propio acuario amortigua cualquier ruido que puedan producir.</li>
                            <li>Son muy sencillos de utilizar.</li>
                            <li>Son muy baratos</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4>Desventajas</h4>
                        <hr />
                        <ul>
                            <li>Ocupan espacio dentro del acuario, que podría estar ocupado por peces, decoración o plantas.</li>
                            <li>Si no conseguimos ocultarlos bien, son bastante anti-estéticos.</li>
                            <li>Exigen un mayor mantenimiento que otros modelos de filtros.</li>
                        </ul>
                    </div>                    
            </div>
            <div className="row justify-content-center">
                <img src={interno} alt="filtro" height="600px" className="col-4 img1"/>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 acuarofilia">
                    <h2>Filtro Externo</h2>
                    <p>Los filtros externos se colocan fuera del acuario y pueden permanecer completamente ocultos, habitualmente bajo el acuario.
                        Tienen muchas ventajas frente al resto de filtros y es habitual verlos montados en acuarios de gran formato, aunque poco a poco y debido a las grandes ventajas que ofrecen, una mayor cantidad de aficionados los utilizan.
                        Están compuestos por una serie de gomas, que extraen y devuelven el agua al acuario, conectadas a un vaso donde están los materiales filtrantes.</p>
                </div>
                               
            </div>
            <div className="row justify-content-center">
                <div className="col-3">
                    <h4>Ventajas</h4>
                    <hr />
                    <ul>
                        <li>Mayor capacidad de filtración</li>
                        <li>Se reducen mucho las tareas de mantenimiento y limpieza</li>
                        <li>Apenas ruido, porque además se colocan ocultos en muebles</li>
                        <li>Ganamos en estética, no están a la vista</li>
                    </ul>
                </div>

                <div className="col-3">
                    <h4>Desventajas</h4>
                    <hr />
                    <li>Habitualmente, que no siempre, son algo más caros</li>
                    <li>Necesitamos habilitar un sitio donde ocultarlos</li>
                </div>
            </div>
            <div className="row justify-content-center">
                <img src={externo} alt="filtro" className="col-4 img1" />
            </div>
            <div className="row justify-content-center align-items-center">
                <Link to="/acuario" className="col-4" >
                    <img className="col-1" src={arrow} alt="arrow" height="50px" width="30px" />
                    <div className="col align-content-baseline">
                        <p>Regresar a Acuarios</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Filtros
