import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


export default class Products extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:["Fruits","Fruits","Fruits","Fruits","Fruits","Fruits","Fruits","Fruits","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables"],
      name:["Apples","Grapes","Berries","Mangoes","Oranges","Bananas","Avocados","Pawpaw","Tomatoes","Onionss","Beet roots","Carrots","Cucumber","Brocollis","Kales","Spinach"],
      quantity:[15,20,10,30,40,30,35,45,50,55,70.65,70,80,75,80],
      price:[350,300,250,150,360,200,130,125,245,180,165,180,135,190,235,260]
    };
  }
  render(){
    return(
      <div className="container">
       <h1 className="cont"> Grocery Store</h1>
       <h1 className="conta"> Vegetables and Fruits </h1>
       <div className="flex">
        <div className ="photo">
        <img src='./Images/Groceryzangu.jpg' />
        </div>
         <div>
           <img src='./Images/Appleszangu.png' width="300" height="300"/>
           <p className="para">
           <p>Name: {this.state.name[0]}</p>
           <p>Type:{this.state.type[0]}</p>
           <p>Quantity: {this.state.quantity[3]}</p>
          <p>Price: {this.state.price[0]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Grapeszangu.jpg' width="300" height="300"/>
           <p className="para">
           <p>Name:{this.state.name[1]}</p> 
           <p>Type:{this.state.type[1]}</p> 
           <p>Quantity:{this.state.quantity[1]}</p>
           <p>Price: {this.state.price[1]}</p>
           <p className="button">Add To Cart</p>
           </p>
        </div>
        <div>  
          <img src='./Images/Berieszangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[2]}</p>
          <p>Type:{this.state.type[2]}</p>
          <p>Quantity:{this.state.quantity[2]}</p>   
          <p>Price: {this.state.price[2]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/MangosZangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[3]}</p>
          <p>Type:{this.state.type[3]}</p>
          <p>Quantity:{this.state.quantity[3]}</p>   
          <p>Price: {this.state.price[3]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Orangeszangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[4]}</p>
          <p>Type:{this.state.type[4]}</p>
          <p>Quantity:{this.state.quantity[4]}</p>   
          <p>Price: {this.state.price[4]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Avocadozangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[5]}</p>
          <p>Type:{this.state.type[5]}</p>
          <p>Quantity:{this.state.quantity[5]}</p>   
          <p>Price: {this.state.price[5]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Bananaszangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[6]}</p>
          <p>Type:{this.state.type[6]}</p>
          <p>Quantity:{this.state.quantity[6]}</p>   
          <p>Price: {this.state.price[6]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Pawpawzangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[7]}</p>
          <p>Type:{this.state.type[7]}</p>
          <p>Quantity:{this.state.quantity[7]}</p>   
          <p>Price: {this.state.price[7]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Tomatoeszangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[8]}</p>
          <p>Type:{this.state.type[8]}</p>
          <p>Quantity:{this.state.quantity[8]}</p>   
          <p>Price: {this.state.price[8]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Onionszangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[9]}</p>
          <p>Type:{this.state.type[9]}</p>
          <p>Quantity:{this.state.quantity[9]}</p>   
          <p>Price: {this.state.price[9]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Beetrootzangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[10]}</p>
          <p>Type:{this.state.type[10]}</p>
          <p>Quantity:{this.state.quantity[10]}</p>   
          <p>Price: {this.state.price[10]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>     
        <div>
          <img src='./Images/Carrotszangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[11]}</p>
          <p>Type:{this.state.type[11]}</p>
          <p>Quantity:{this.state.quantity[11]}</p>   
          <p>Price: {this.state.price[11]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Cucuzzangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[12]}</p>
          <p>Type:{this.state.type[12]}</p>
          <p>Quantity:{this.state.quantity[12]}</p>   
          <p>Price: {this.state.price[12]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Brocollirootzangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[13]}</p>
          <p>Type:{this.state.type[13]}</p>
          <p>Quantity:{this.state.quantity[13]}</p>   
          <p>Price: {this.state.price[13]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Kalezangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[14]}</p>
          <p>Type:{this.state.type[14]}</p>
          <p>Quantity:{this.state.quantity[14]}</p>   
          <p>Price: {this.state.price[14]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
        <div>
          <img src='./Images/Spinachzangu.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[15]}</p>
          <p>Type:{this.state.type[15]}</p>
          <p>Quantity:{this.state.quantity[15]}</p>   
          <p>Price: {this.state.price[15]}</p>
          <p className="button">Add To Cart</p>
          </p>
        </div>
       </div>
       </div>
    );
    } 

  }

  ReactDOM.render(
    <React.StrictMode>
      <Products />
    </React.StrictMode>,
    document.getElementById('root')
  );



