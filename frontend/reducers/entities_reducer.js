import { combineReducers } from "redux";
import users from './entities/users_reducer';
import artists from './entities/artists_reducer';
import albums from './entities/albums_reducer';

export default combineReducers({
  users,
  artists,
  albums
});