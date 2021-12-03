import React from 'react'
import { Link } from 'react-router-dom'

const Tittle = () => {
    return (
        <div>
            <div className="container-fluid">
                    <div className="row align-items-center ">

                        <Link to="/" className="Inicio" >
                            <h1 className="tittle">
                                Amazonia Fish
                            </h1>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default Tittle
