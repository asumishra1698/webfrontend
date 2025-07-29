import * as actionTypes from "../actions/actionsTypes";

interface Contact {
  _id: string;
  name: string;
  number: string;
  email: string;
  message: string;
  city: string;
  createdAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

interface ContactState {
  contacts: Contact[];
  pagination: Pagination | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: ContactState = {
  contacts: [],
  pagination: null,
  loading: false,
  error: null,
  success: false,
};

const contactReducer = (state = initialState, action: any): ContactState => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS_REQUEST:
    case actionTypes.CREATE_CONTACT_REQUEST:
      return { ...state, loading: true, error: null, success: false };

    case actionTypes.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload.contacts,
        pagination: action.payload.pagination,
      };

    case actionTypes.CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        contacts: [...state.contacts, action.payload],
      };

    case actionTypes.GET_CONTACTS_FAILURE:
    case actionTypes.CREATE_CONTACT_FAILURE:
      return { ...state, loading: false, error: action.payload.error, success: false };

    default:
      return state;
  }
};

export default contactReducer;
