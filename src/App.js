import React, { Component } from 'react';
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"

class App extends Component {
  state ={
    products:[
      {id:0, name:"shipcy", price:100 ,items:10},
      {id:1, name:"apple", price:50 , items:20},
      {id:2, name:"banana", price:70 , items:30},
      {id:3, name:"orange", price:60 , items:15},
      {id:4, name:"kiwi", price:80 , items:25},
    ]
  }
  increment = (data)=>{
    const incrementProduct = this.state.products.map((product)=>(
      product.id===data.id? {...product, items: product.items+1}: product
    ))
    this.setState({products: incrementProduct})
  }
  decrement = (data)=>{
    const decrementProduct = this.state.products.map((product)=>(
      product.id===data.id ? {...product, items: product.items-1} : product

    ))
    this.setState({products: decrementProduct})
  }
  delete = (data)=>{
    const deleteProduct = this.state.products.filter((product)=>(
      product.id!=data.id
    ))
    this.setState({products: deleteProduct})
  }
  addProduct = (data)=>{
    const addProducts = [...this.state.products, data]
    this.setState({products: addProducts})
  }
  render() {
    return (
      <div>
            <div>
        <Header addProduct={this.addProduct} products = {this.state.products}/>
        <Home products = {this.state.products}  increment={this.increment} decrement= {this.decrement} delete={this.delete} />
      </div>
      </div>
    );
  }
}

export default App;