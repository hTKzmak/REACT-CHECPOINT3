import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { Context } from './context/Context';

import { useEffect, useState, useRef } from "react"

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
  }, []);

  let scrollFooterRef = useRef()

  function footerScroll() {
    scrollFooterRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function doubleDelete(id) {
    let removedTasks = products.filter((elem => elem.id !== id))
    setProducts(removedTasks)
  }

  return (
    <Context.Provider value={{products, doubleDelete}}>
      <div>
        <Header footerScroll={footerScroll} />
        <ProductList />
        <Footer ref={scrollFooterRef} />
      </div>
    </Context.Provider>
  );
}

export default App;
