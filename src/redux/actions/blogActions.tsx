import * as actionTypes from "./actionsTypes";

// Get all posts
export const getPostsRequest = (
  page = 1,
  limit = 10,
  search = "",
  status = "published"
) => ({
  type: actionTypes.GET_POSTS_REQUEST,
  payload: { page, limit, search, status },
});

export const getPostsSuccess = (posts: any[], pagination: any) => ({
  type: actionTypes.GET_POSTS_SUCCESS,
  payload: { posts, pagination },
});

export const getPostsFailure = (error: string) => ({
  type: actionTypes.GET_POSTS_FAILURE,
  payload: { error },
});

export const getPostBySlugRequest = (slug: string) => ({
  type: actionTypes.GET_POST_BY_SLUG_REQUEST,
  payload: { slug },
});

export const getPostBySlugSuccess = (post: any) => ({
  type: actionTypes.GET_POST_BY_SLUG_SUCCESS,
  payload: { post },
});

export const getPostBySlugFailure = (error: string) => ({
  type: actionTypes.GET_POST_BY_SLUG_FAILURE,
  payload: { error },
});
