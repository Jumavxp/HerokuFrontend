import acuarioM from "../assets/acuarioMarino.jpg"

const Home = () => {
    return(
        <div>
            <div className="container-fluid paginaPrincipal">   
                <div className="row justify-content-center acuarofilia">
                    <div className=" col-4">
                        <h2>Acuarofilia</h2>
                        <p>La acuariofilia moderna es la afición a la cría de peces y otros organismos acuáticos en acuario, 
                        bajo condiciones controladas. Ha evolucionado tremendamente a lo largo de los siglos, 
                        desde el mantenimiento de carpas doradas con fines ornamentales en recipientes y estanques, desde hace 2000 años.
                        </p>
                        <p>
                        Existen referencias en la antigua China sobre la cría de peces dorados en depósitos cerámicos, a temperatura ambiente. 
                        El nivel de la acuariofilia era totalmente básico, sin sistemas de soporte de vida para los peces, 
                        que requerían especies resistentes y constantes cambios de agua. Este sistema arcaico se perpetuó hasta nuestros
                         días a través de las peceras, y se superó con el desarrollo de los modernos acuarios.
                        Actualmente la acuariofilia es una afición que puede llegar a altos niveles de conocimiento y sofisticación, 
                        que traspasan la frontera de afición para convertirse en una verdadera ciencia, la acuariología.
                        </p>
                    </div>
                </div>        
                <div className="row justify-content-center">
                    <img className="col-4 acuarofilia"src={acuarioM} alt="acuariomarino"  />           
                </div>
                    
                                   
                    
            </div>
    
        </div>
    )
}

export default Home;