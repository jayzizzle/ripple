import { 
  RECEIVED_SESSION_ERRORS,
  RECEIVED_CURRENT_USER 
} from "../../actions/session_actions";

const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVED_SESSION_ERRORS:
      return action.errors;
    case RECEIVED_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;