import * as actionTypes from "./actionsTypes";

export const getContactsRequest = (page = 1, limit = 10, search = "") => ({
  type: actionTypes.GET_CONTACTS_REQUEST,
  payload: { page, limit, search },
});

export const createContactRequest = (contactData: {
  name: string;
  number: string;
  email: string;
  message: string;
  city: string;
}) => ({
  type: actionTypes.CREATE_CONTACT_REQUEST,
  payload: { contactData },
});
