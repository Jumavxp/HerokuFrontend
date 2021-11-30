import React from 'react'
import Data from "../../data/DataAcuarios/LimpiezaData.json"
import cleans from "../../assets/limpieza.jpg"
import arrow from "../../assets/2561330_arrow_left_icon (1).png"
import { Link } from 'react-router-dom'


const Limpieza = () => {
    return (
        
        <div className="container-fluid">
            <div className="row justify-content-center align-content-center">
                {Data.map(post=>{
                    return(
                        <div className="col-5 acuarofilia" key={post.id}>
                            <h2>{post.tittle1}</h2>
                            <p>{post.s1p1}</p>
                            <br /><hr /><br />
                            <div className="row justify-content-center">
                                <img className="img1" src={cleans} alt="acuario" />
                            </div>
                            <br /><hr /><br />
                            <h2>{post.tittle2}</h2>
                            <p>{post.s2p1}</p>
                            <p>{post.s2p2}</p>
                            <br /><hr /><br />
                            <div class="alert alert-danger" role="alert">
                                {post.warning}
                            </div>
                            <div className="row align-items-center">
                                <Link to="/acuario" className="row align-items-center">
                                    <img className="col-1" src={arrow} alt="arrow" height="50px" width="30px" />
                                    <div className="col align-content-baseline">
                                        <p>Regresar a Acuarios</p>
                                    </div>     
                                </Link>                           
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Limpieza
