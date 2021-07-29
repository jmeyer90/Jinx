import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../../actions/business_actions';
import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from '../../actions/review_actions'
import { RECEIVE_SEARCH_RESULTS } from "../../actions/search_actions";

const UsersReducer = ( state={}, action ) => {
  Object.freeze( state );
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESS:
      newState = action.users;
      return newState;

    case RECEIVE_REVIEWS:
      newState = action.users;
      return newState;

    case RECEIVE_REVIEW:
      newState = action.user;
      return Object.assign({}, state, newState);

    case RECEIVE_USER:
      newState = {[action.user.id]: action.user};
      return Object.assign({}, state, newState );
    
    case RECEIVE_SEARCH_RESULTS:
      debugger
      return action.users
      
    default:
      return state;
  }
}

export default UsersReducer;