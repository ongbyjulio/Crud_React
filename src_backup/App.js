import logo from './logo.svg';
import './App.css';
import React from 'react';
import Title from './Title';
import ReactDOM  from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <Title />

        <div>
      {phoneData.map((phone, id) => (
        <Product
          key={id}
          name={phone.name}
          price={phone.price}
          discount={phone.discount}
        ></Product>
      ))}
    </div>

      </header>
    </div>
  );
}

const phoneData = [
  { name: "iPhone X", price: 10000000, discount: 50 },
  { name: "Oppo Find X", price: 14000000, discount: 30 },
  { name: "Redmi Note X", price: 5000000, discount: 42 },
  { name: "vivo", price: 100000, discount:0}
];

// membuat komponen dengan props name, price, dan discount
function Product({ name, price, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      {discount > 0 && <p><s>Rp {price}</s> ({discount}%)</p>}
      <p>
        <s>Rp {price}</s> ({discount}%)
      </p>
      <p>
        <b>
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
}












/* <div>
          <Product name="iphone X" price="10000000" discount="50"></Product>
          <Product name="Opo" price="20000000" discount="40"></Product>
          <Product name="Mito" price="30000000" discount="20"></Product>
        </div>
function Product({name, price,discount = 0}){
  return(
    <div>
      <h2>{name}</h2>
      <p>
        <s>Rp {price}</s>({discount}%)
      </p>
      <p>
        <b>Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}</b>
      </p>
      <hr />
    </div>

  );
} */


// function MyComponent() {
//   const imgPlaceholder = "https://via.placeholder.com/150";
//   return (
//     <div>
//       <button>{ 1 + 2 }</button><br/>
//       <button>{ Date.now() }</button><br/>
//       <img src={ imgPlaceholder } />
//     </div>
//   );
// }



export default App;


// function Header(){
//   return (
//     <div>
//       <h1> Tutorial reactjs untuk Pemula</h1>
//       <h2>Panduan stepstepni</h2>
//     </div>
//   );
// }
// ReactDOM.render(<Header />,document.getElementById("root"));


// class Header extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>hiii</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Header />,document.getElementById("root"));

