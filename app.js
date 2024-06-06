import React from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import Tags from './components/Tags';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce</h1>
        <Categories />
        <Products />
        <Tags />
      </header>
    </div>
  );
}

export default App;
