import React, { Component } from 'react';
import axios from 'axios';


export default class CreateProduct extends Component {

    constructor(props) {
        super(props)
        //setting up functions
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDesc = this.onChangeProductDesc.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            name:'',
            desc:'',
            price:''
        }
    }

    onChangeProductName(e) {
        this.setState({name: e.target.value})
    }
    onChangeProductDesc(e) {
        this.setState({desc: e.target.value})
    }
    onChangeProductPrice(e) {
        this.setState({price: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const productObject = {
            name: this.state.name,
            desc: this.state.desc,
            price: this.state.price
        };

        axios.post('https://safe-headland-67992.herokuapp.com/products/create-product', productObject)
        .then(res => console.log(res.data));

        this.setState({
            name:'',
            desc:'',
            price:''
        })

    }

    render(){
        return (
            <div className="formCreate container-fluid">
                <form onSubmit={this.onSubmit} className="container-fluid">
                    <div className="row justify-content-center">
                        <label htmlFor="name" className="col-2">Nombre del Producto</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeProductName}  className="col-2"/>
                    </div>
                    <div className="row justify-content-center">
                        <label htmlFor="description" className="col-2">Descripcion</label>
                        <input type="text" value={this.state.desc} onChange={this.onChangeProductDesc} className="col-2"/>
                    </div>
                    <div className="row justify-content-center">
                        <label htmlFor="precio" className="col-2">Precio</label>
                        <input type="text" value={this.state.price} onChange={this.onChangeProductPrice}  className="col-2"/>
                    </div>
                    <input className="submitBtn" type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

