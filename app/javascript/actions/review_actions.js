import * as ReviewUtils from '../utils/review_util';
import { extractAsObj} from '../utils/action utils';

export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const REVIEW_ERRORS = "REVIEW_ERRORS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

const receiveReviews = reviewsInfo => {
  const reviews = extractAsObj(reviewsInfo, "reviews");
  const users = extractAsObj(reviewsInfo, "users");
  return {
    type: RECEIVE_REVIEWS,
    reviews,
    users
  }
};

const receiveReview = reviewInfo => {
  const review = reviewInfo.review;
  const user = reviewInfo.user;
  
  return {
    type: RECEIVE_REVIEW,
    review,
    user
  }
};

const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
};

const reviewErrors = (errors) => {
  return {
    type: REVIEW_ERRORS,
    errors
  }
};

export const fetchReviews = businessId => dispatch => {
  return (ReviewUtils.fetchReviews( businessId )
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      errors => dispatch(reviewErrors(errors.responseJSON))
    ))
};

export const fetchReview = reviewId => dispatch => {
  return (
    ReviewUtils.fetchReview(reviewId)
      .then(
        review => dispatch(receiveReview(review)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}

export const updateReview = (businessId, review) => dispatch =>{
  return (
    ReviewUtils.updateReview(businessId, review)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(reviewErrors(errors.responseJSON))
    )
  )
}

export const createReview = (businessId, rating, body )=> dispatch => {
  const review= {rating, body};
  return (
    ReviewUtils.createReview(businessId, review)
      .then(
        review => dispatch(receiveReview(review)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}

export const deleteReview = reviewId => dispatch => {
  return (
    ReviewUtils.deleteReview(reviewId)
      .then(
        reviewId => dispatch(removeReview(reviewId)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}