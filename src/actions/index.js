export const TOGGLE_PUNCHLINE = "TOGGLE_PUNCHLINE";
export const FETCH_START= "FETCH_START";
// Redux action creator
export const FETCH_SUCCESFUL= "FETCH_SUCCESFUL";



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