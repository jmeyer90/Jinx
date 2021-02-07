import { combineReducers } from "redux";
import SessionErrors from './session_errors_reducer';
import UsersReducer from './users_error_reducer';
import BusinessReducer from './business_errors_reducer';
import ReviewsReducer from './review_errors_reducer';

const ErrorsRedcuer = combineReducers({
  sessionErrors: SessionErrors,
  usersErrors: UsersReducer,
  businessErrors: BusinessReducer,
  reviewErrors: ReviewsReducer
});

export default ErrorsRedcuer;