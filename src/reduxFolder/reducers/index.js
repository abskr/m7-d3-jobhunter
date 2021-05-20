import { initialState } from '../store/index.js'

const mainReducers = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_JOB_TO_FAV':
      return {
        ...state,
        fav: {
          ...state.fav,
          jobs: state.fav.jobs.concat(action.payload)
        }
      }
    
    case 'REMOVE_JOB_FROM_FAV':
      return {
        ...state,
        fav: {
          ...state.fav,
          jobs: [
            ...state.fav.jobs.filter(
              (job) => job.id !== action.payload.id
            )
          ]
        }
      }
    // ADD MORE CASES
      default: return state
    }
}

export default mainReducers