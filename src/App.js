import React from 'react';
import './App.css';
import data from './data/data';
import JokesList from './components/jokesList';

function App() {
  const jokes = data;
  const loading = false;
  const error = '';

  return (
    <div className="App">
      <div className='header'>
        <h1> 😂 </h1>  
      </div>
      
    {loading ? (
        <h3>We are loading</h3>
      ) : (
        <JokesList jokes={jokes} />
      )}
      
      
    </div>
  );
}

export default App;
