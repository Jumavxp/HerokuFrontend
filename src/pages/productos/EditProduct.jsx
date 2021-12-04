import React, { Component } from "react";
import axios from 'axios';



export default class EditProduct extends Component {
    constructor(props) {
        super(props)
        
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDesc = this.onChangeProductDesc.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            name: '',
            desc: '',
            price: ''
        }
    }

    componentDidMount(){
        if (this.props.match && this.props.match.params.postID) {
            const postID = this.props.match.params.postID
            axios.get(`https://safe-headland-67992.herokuapp.com/products/update-product ${postID}`)
            .then(res =>{
                this.setState({
                    name: res.data.name,
                    desc: res.data.desc,
                    price: res.data.price
                });
            })
            .catch((error) =>{
                console.log(error);
            })
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

        if (this.props.match && this.props.match.params.postID) {
            const postID = this.props.match.params.postID
        axios.put(`https://safe-headland-67992.herokuapp.com/products/update-product${postID}`, productObject)
        .then((res) =>{
            console.log(res.data)
            console.log('Product successfully updated')
        })
        .catch((error) =>{
            console.log(error)
        })
        
    }
}


    render(){
        return(
            <div className="formEdit">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">Nombre del Producto</label>
                    <input type="text" value={this.state.name} onChange={this.onChangeProductName} />
                    <label htmlFor="description">Descripcion</label>
                    <input type="text" value={this.state.desc} onChange={this.onChangeProductDesc} />
                    <label htmlFor="precio">Precio</label>
                    <input type="text" value={this.state.price} onChange={this.onChangeProductPrice}/>
                    <input type="submit" value="Submit" />
                </form>
            
            </div>
        )
    }
}