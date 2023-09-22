import axios from "axios";
export const TOGGLE_PUNCHLINE = "TOGGLE_PUNCHLINE";
export const FETCH_START= "FETCH_START";
// Redux action creator
export const FETCH_SUCCESFUL= "FETCH_SUCCESFUL";

export const getJokes = ()=>{
  return(dispatch =>{
    dispatch(fetchStart())
    axios.get('https://official-joke-api.appspot.com/random_ten')
    .then(res=>{
      
      dispatch(fetchSuccesful(res.data))
    })
    .catch(err=>{
      console.log(err)
    })
  });
}

export const fetchStart = ()=> {
    return ({type: FETCH_START});
}

export const fetchSuccesful= jokes =>{
    return ({ type: FETCH_SUCCESFUL, payload:jokes})
}


export const togglePunchline = (jokeId) => ({
  type: TOGGLE_PUNCHLINE,
  payload: { jokeId },
});