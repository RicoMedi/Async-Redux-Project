 import {connect} from 'react-redux';
 import React from 'react';
import { getJokes } from '../actions';


 const GetButton =(props)=>{

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.getJokes();

  }
  return(
    <form onSubmit={handleSubmit}>
      <button>More Jokes</button>
    </form>
  ) 
 }


 export default connect(null, {getJokes}) (GetButton);
   