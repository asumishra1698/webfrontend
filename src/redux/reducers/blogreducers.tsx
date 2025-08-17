import * as actionTypes from "../actions/actionsTypes";

interface Post {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  author?: {
    _id: string;
    name: string;
    email: string;
  };
  category?: string | null;
  tags?: string[];
  featuredImage?: string;
  galleryImages?: string[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

interface BlogState {
  posts: Post[];
  blog: Post | null;
  pagination: Pagination | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  blog: null,
  pagination: null,
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action: any): BlogState => {
  switch (action.type) {
    case actionTypes.GET_POSTS_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        pagination: action.payload.pagination,
      };
    case actionTypes.GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case actionTypes.GET_POST_BY_SLUG_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_POST_BY_SLUG_SUCCESS:
      return {
        ...state,
        loading: false,
        blog: action.payload.post,
      };
    case actionTypes.GET_POST_BY_SLUG_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default blogReducer;
