import data from "../data/data";
import { TOGGLE_PUNCHLINE, FETCH_START, FETCH_SUCCESFUL } from "../actions";


const initialState= {
    jokes: [],
    loading: false,
    error: '',
    visiblePunchlines: [],

}
 const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                loading: true,
                error:''
            }
        case FETCH_SUCCESFUL:
            return{
                ...state,
                loading: false,
                jokes: action.payload,
                error:''
            }

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

