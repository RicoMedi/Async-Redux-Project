import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import { useEffect } from 'react';
import JokesList from './components/jokesList';
import { fetchStart, fetchSuccesful } from './actions';
import axios from 'axios';

function App(props) {
  const {loading,error}= props;

useEffect(()=>{
  props.fetchStart();
  axios.get('https://official-joke-api.appspot.com/random_ten')
  .then(res=>{
    
    props.fetchSuccesful(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
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



export default connect(mapStateToProps, { fetchStart, fetchSuccesful })(App);
