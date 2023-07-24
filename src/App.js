import { useState } from 'react';
import './App.css';
import Nav from './nav';
import Rout from './rout';
import Footer from './footer';
import Productdetail from './productdetails';
import { BrowserRouter } from 'react-router-dom';

function App() {
  //Add to cart
  const [cart, setCart] = useState([])

  //Product Detail
  const [ close, setClose ] = useState(false)
  const [detail, setDetail] = useState([])

  //Filter Product
  const [ product, setProduct ] = useState(Productdetail);
  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  //Product Details
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

  //add to cart
  const addtocart = (product) => 
  {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist){
      alert("This product is already added to cart")
    }
    else{
      setCart([...cart, {...product, qty:1}])
      alert("Added ✅")
    }
    // {ele.id}
  }

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn}/>
        <Rout product={product} setProduct={setProduct} detail = {detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
