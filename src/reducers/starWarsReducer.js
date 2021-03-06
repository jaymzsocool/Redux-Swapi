import { FETCHING, FETCHED, ERROR} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING :
      return  (
        {...state,        
          fetching: true,
          chars: action.payload}  
      )
              
      

            

    case FETCHED:
     return (
       {...state,        
        fetching: false,
        fetched: true} 
     )
             
     
    
    case ERROR:
     return[
       
       {...state,
         error: action.error
       }
     ]
    default:
      return state;
  }
};
