import { handleFetchingNewsApi, handlePublishingNewsApi } from "../http/api";
import {
  USER_FETCHING_NEWS_SUCCESS,
  USER_PUBLISHING_NEWS,
} from "./actionTypes";

export const fetchNews = () => async (dispatch) => {
  const res = await handleFetchingNewsApi();
  if (res) {
    dispatch({
      type: USER_FETCHING_NEWS_SUCCESS,
      payload: res.data,
    });
  }
};

export const publishNews = (article) => async (dispatch) => {
  dispatch({ type: `${USER_PUBLISHING_NEWS}_REQUEST` });
  const res = await handlePublishingNewsApi(article);
  if (res) {
    dispatch({
      type: `${USER_PUBLISHING_NEWS}_SUCCESS`,
      payload: res.data,
    });
  } else {
    dispatch({
      type: `${USER_PUBLISHING_NEWS}_FAILURE`,
    });
  }
};
