import {
  USER_FETCHING_NEWS_SUCCESS,
  USER_PUBLISHING_NEWS,
} from "../actions/actionTypes";

export const newsReducer = (state = null, action) => {
  switch (action.type) {
    case USER_FETCHING_NEWS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case `${USER_PUBLISHING_NEWS}_REQUEST`:
      return {
        ...state,
        publishingNews: true,
        newsCreated: false,
      };
    case `${USER_PUBLISHING_NEWS}_SUCCESS`:
      return {
        ...state,
        publishingNews: false,
        newsCreated: true,
      };
    case `${USER_PUBLISHING_NEWS}_FAILURE`:
      return {
        ...state,
        publishingNews: false,
        newsCreated: false,
      };
    case `${USER_PUBLISHING_NEWS}_REVERT`:
      return {
        ...state,
        publishingNews: null,
        newsCreated: null,
      };
    default:
      return state;
  }
};
