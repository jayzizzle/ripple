import { 
  RECEIVED_CURRENT_USER 
} from "../../actions/session_actions";

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVED_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser.info})
    default:
      return state;
  }
}

export default usersReducer;