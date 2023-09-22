import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import { useEffect } from 'react';
import JokesList from './components/jokesList';
import { getJokes } from './actions';


function App(props) {
  const {loading,error, getJokes}= props;

useEffect(()=>{
  getJokes();
  
},[])

  return (
    <div className="App">
      <div className='header'>
        <h1> 😂 </h1>  
       
      </div>
       {
          (error !== "") && <h3>{error}</h3>
        }
    {loading ? (
        <h3>We Are Loading...</h3>
      ) : (
        <JokesList />
      )}
      
      
    </div>
  );
}
const mapStateToProps= state =>{
  return{
    loading: state.loading,
    error: state.error
  }
}



export default connect(mapStateToProps, { getJokes })(App);
