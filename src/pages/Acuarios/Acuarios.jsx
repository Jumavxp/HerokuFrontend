import React from "react";
import { Link } from "react-router-dom";
import Data from "../../data/DataAcuarios/AcuariosData.json"
import acua from "../../assets/acuario_en_Casa.jpg"


const Acuarios = () => {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center align-content-center">
                {Data.map(post=>{
                    return(
                        <div className="col-5 acuarofilia" key={post.id}>
                            <h2>{post.tittle1}</h2>
                            <p>{post.s1p1}</p>
                            <br /><hr /><br />
                            <h2>{post.tittle2}</h2>
                            <p>{post.s2p1}</p>
                            <br /><hr /><br />
                        </div>
                    )
                })}
                <div className="row justify-content-center">
                    <img className="col-5 img1" src={acua} alt="acuario" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 botonesAcuario justify-content-around">
                        <div className="col-2">
                            <Link to="/acuario/limpieza">
                                <button className="Inicio botonesAcuarioInterior">
                                    Limpieza
                                </button>
                            </Link>
                        </div>
                        <div className="col-1">
                            <Link to="/acuario/filtros">
                                <button className="Inicio botonesAcuarioInterior">
                                    Filtros
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Acuarios;