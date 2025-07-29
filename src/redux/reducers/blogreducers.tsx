import * as actionTypes from "../actions/actionsTypes";

interface Post {
  _id: string;
  title: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

interface BlogState {
  posts: Post[];
  pagination: Pagination | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  pagination: null,
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action: any): BlogState => {
  switch (action.type) {
    case actionTypes.GET_POSTS_REQUEST:
    case actionTypes.CREATE_POST_REQUEST:
    case actionTypes.UPDATE_POST_REQUEST:
    case actionTypes.DELETE_POST_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        pagination: action.payload.pagination,
      };

    case actionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };

    case actionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post._id !== action.payload.id),
      };

    case actionTypes.GET_POSTS_FAILURE:
    case actionTypes.CREATE_POST_FAILURE:
    case actionTypes.UPDATE_POST_FAILURE:
    case actionTypes.DELETE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default blogReducer;