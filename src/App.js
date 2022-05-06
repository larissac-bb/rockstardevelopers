import './App.css';
import { useEffect } from 'react';
import Navigation from './Navigation';
import MainPage from './MainPage';

function App() {

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>console.log(json))
  }) 

  return (
    <div className="App">
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App;
