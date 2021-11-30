import React from 'react'

const CardPeces = (props) => {
    return (
        <div className="card">
            <img className="card-img-top"src={props.imagen} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                    <ul className="lista-peces">
                        <li>
                            <p className="card-text"> <b>Tamaño del Acuario: </b>{props.size} </p>
                        </li>
                        <li>
                            <p className="card-text"> <b>Temperatura ideal: </b> {props.temp} </p>
                        </li>
                        <li>
                            <p className="card-text"> <b>Ph: </b> {props.ph} </p>                    
                        </li>
                        <li>
                            <p className="card-text"> <b>Dieta: </b> {props.diet}</p>                    
                        </li>
                        <li>
                            <p className="card-text"> <b>Longitud: </b> {props.long}</p>
                        </li>
                    </ul>
            </div>            
        </div>
    )
}

export default CardPeces
