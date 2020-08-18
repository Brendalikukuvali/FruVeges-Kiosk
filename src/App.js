import React from 'react';
import logo from './logo.svg';
import './App.css';

function UserGreeting (props) {
  return<h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return<h1>Please sign up.</h1>;
} 
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return<UserGreeting/>;
   }
   return<GuestGreeting/>;
  }
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')

  );
  render() 
    const isLoggedIn = this.state.isLoggedIn;
    return (
    <div>     
    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
   );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

      veg1: "Spinach",
      veg1Img:
       "Images/Spinachzangu.jpg",
      SpinachImgQuantity: "10kgs",
      SpinachImgPrice: 100,


      veg2: "Onion",
      veg2Img:
        "Images/Onionszangu.jpg",
      OnionsImgQuantity: "30kgs",
      OnionsImgPrice: 100,


      veg3: "Carrots",
      veg3Img:
        "Images/Carrotszangu.jpz",
      CarrotsImgQuantity: "50kgs",
      CarrotsImgPrice: 100,


      type2: "Fruits",

      fruit1: " Banana",
      fruit1Img:
        "Images/Bananaszangu.jpg",
      bananasImgQuantity: "20kgs",
      BananasImgPrice: 100,


      fruit2: " Mango",
      fruit2Img:
        "Images/Mangoeszangu.jpg",
      MangoesImgQuantity: 50,
      MangoesImgPrice: 100,


      appleImg:
        "Images/Appleszangu.png",
      ApplesImgQuantity: 30,
      ApplesImgPrice: 100,

      bunchImg:
        "Images/Orangeszangu.jpg",
        ApplesImgQuantity: 30,
      ApplesImgPrice: 100,

      bunch2Img:
        "Images/Tomatoeszangu.jpg",
      ApplesImgQuantity: 30,
      ApplesImgPrice: 100,

      bunch3Img:
        "Images/Berrieszangu.jpg",
      ApplesImgQuantity: 30,
      ApplesImgPrice: 100,
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>GREENS KIOSK</h1>
        <h2> Welcome to our new site </h2>
        <header>
<nav>
<ul>
<li><a href="index.html" class="active">Vegetables</a></li>
<li><a href="about.html">Fruits</a></li>
</ul>
</nav>
</header>

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImg} alt="" />
            </div>
            <div className="product-info">
              <h5>Apples </h5>
              <p> Kshs. {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.spinachImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Spinach</h5>
              <h6> Kshs. </h6>
              <p> Quantity {this.state.spinachImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Onions</h5>
              <h6> Kshs.</h6>
              <p> Quantity {this.state.spinachImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Oranges</h5>
              <p> Kshs. {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
          <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImg} alt="" />
            </div>
            <div className="product-info">
              <h5>Spinach </h5>
              <p> Kshs. {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.spinachImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Onions</h5>
              <h6> Kshs. </h6>
              <p> Quantity {this.state.spinachImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Carrots</h5>
              <h6> Kshs.</h6>
              <p> Quantity {this.state.spinachImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Banana</h5>
              <p> Kshs. {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
          <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          
           </section>
      </div>
    );
  }
}

export default App;

