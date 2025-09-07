import * as actionTypes from "./actionsTypes";

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
