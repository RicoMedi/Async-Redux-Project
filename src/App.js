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
      <h1>D1 Jokes</h1>

      {loading ? (
        <h3>We are loading</h3>
      ) : (
        <JokesList jokes={jokes} />
      )}
      <button>More Jokes</button>
    </div>
  );
}

export default App;
