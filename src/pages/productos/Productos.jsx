import React, {Component} from 'react';
import axios from 'axios';
import TablaProductos from './TablaProductos';



export default class Products extends Component{

    constructor (props){
        super(props)
        this.state = {
            products:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
        .then(res =>{
            this.setState({
                products: res.data
            });
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    DataTable(){
        return this.state.products.map((res,i ) =>{
            return <TablaProductos obj={res} key={i} />;
        })
    }

    render(){
        return(
                
            <div className=" container-fluid tablaProductos">
                <table className= "container-fluid">
                    <thead className="row justify-content-between tablaHead ">
                        <th className="col">Nombre</th>
                        <th className="col">Descripcion</th>
                        <th className="col">Precio</th>
                        <th className="col">Accion</th>
                    </thead>
                    <tbody className="row justify-content-between ">
                        {this.DataTable()}
                    </tbody>
                </table>
            </div>

        )
    }
}

