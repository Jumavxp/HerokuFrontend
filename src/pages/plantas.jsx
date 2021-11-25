import React from "react";
import Data from "../data/plantasData.json"
import planta from "../assets/plantas-de-acuario-iluminación.jpg"



const Plantas = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-content-center">
                {Data.map(post=>{
                    return(
                        <div className="col-5 acuarofilia">
                            <h2>{post.tittle1}</h2>
                            <p>{post.s1p1}</p>
                            <br /><hr /><br />
                            <h2>{post.tittle2}</h2>
                            <p>{post.s2p1}</p>
                            <br /><hr /><br />
                            <h2>{post.tittle3}</h2>
                            <p>{post.s3p1}</p>
                            <br /><hr /><br />
                        </div>
                    )})
                }
            </div>
            <div className="row justify-content-center">
                <img src={planta} alt="plantitas" className="col-4 img1"  />
            </div>
        </div>  
    )
}

export default Plantas;