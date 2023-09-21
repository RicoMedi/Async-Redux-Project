import data from "../data/data";
import { TOGGLE_PUNCHLINE } from "../actions";

const initialState= {
    jokes: data,
    loading: false,
    error: '',
    visiblePunchlines: [],

}
 const reducer=(state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_PUNCHLINE:
            const { jokeId } = action.payload;
            const isPunchlineVisible = state.visiblePunchlines.includes(jokeId);
      
            const updatedVisiblePunchlines = isPunchlineVisible
              ? state.visiblePunchlines.filter((id) => id !== jokeId)
              : [...state.visiblePunchlines, jokeId];
      
            return {
              ...state,
              visiblePunchlines: updatedVisiblePunchlines,
            };
       default:
        return state; 
    }
 }


export default reducer 

