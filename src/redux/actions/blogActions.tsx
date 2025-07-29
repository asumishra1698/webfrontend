import * as actionTypes from "./actionsTypes";

// Get all posts
export const getPostsRequest = (page = 1, limit = 10, search = "") => ({
  type: actionTypes.GET_POSTS_REQUEST,
  payload: { page, limit, search },
});

// Create a post
export const createPostRequest = (postData: any) => ({
  type: actionTypes.CREATE_POST_REQUEST,
  payload: { postData },
});

// Update a post
export const updatePostRequest = (id: string, postData: any) => ({
  type: actionTypes.UPDATE_POST_REQUEST,
  payload: { id, postData },
});

// Delete a post
export const deletePostRequest = (id: string) => ({
  type: actionTypes.DELETE_POST_REQUEST,
  payload: { id },
});