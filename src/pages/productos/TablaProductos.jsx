import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default  class TablaProductos extends Component {

    constructor(props){
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    
    deleteProduct(){
        axios.delete('http://localhost:4000/products/delete-product/' + this.props.obj._id)
        .then((res) =>{
            console.log('Product deleted successfully!')
            
        })
        .catch((error) =>{
            console.log(error)
        })
       
    }

    render(){
        return (
            
            <tr className="row justify-content-between tablaBody">
                <td className="col">{this.props.obj.name}</td>
                <td className="col">{this.props.obj.desc}</td>
                <td className="col">${this.props.obj.price}</td>
                <td className="col">
                    
                    <button className="btn" onClick={this.deleteProduct}>Borrar</button>
                    <Link to={'/products/edit-product/'+ this.props.obj._id}>
                        editar
                    </Link>
                </td>
            </tr>

        );
 }
}


