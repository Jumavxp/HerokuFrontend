import Data from "../data/HomeData.json"
import acuario from "../assets/acuario3web-acuariofilia.jpg"

  

const Home = () => {
    return(
        <div>
            <div className="container-fluid paginaPrincipal">   
                <div className="row justify-content-center align-content-center">
                        {Data.map(post => {
                            return (
                                <div className="col-5 acuarofilia" key={post.id}>
                                    <h2>{post.tittle1}</h2>
                                    <p>{post.body1}</p>
                                    <p>{post.body2}</p>
                                    <br /><hr /><br />
                                    <h2>{post.tittle2}</h2>
                                    <p>{post.s2b1}</p>
                                    <br /><hr /><br />
                                    <h2>{post.tittle3}</h2>
                                    <p>{post.s3b1}</p>
                                    <br /><hr /><br />
                                </div>
                            )
                        })}
                </div>        
                <div className="row justify-content-center">
                    <img className="col-5 img1" src={acuario} alt="acuario" />
                </div>
                    
                                   
                    
            </div>
    
        </div>
    )
}

export default Home;