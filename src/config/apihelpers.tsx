import axios from "axios";

// POST Request Helper
export const postRequest = async (
  url: string,
  payload: any,
  headers: Record<string, string> = {}
) => {
  try {
    const token = localStorage.getItem("token");
    // Detect if payload is FormData
    const isFormData = typeof FormData !== "undefined" && payload instanceof FormData;
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Only set Content-Type if NOT FormData
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...headers,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error in postRequest:", error);
    throw new Error(
      error.response?.data?.message || "Network error. Please try again."
    );
  }
};

// GET Request Helper
export const getRequest = async (
  url: string,
  params: any = null,
  config: any = {}
) => {
  try {
    const token = localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(config.headers || {}),
      },
      params: params,
      ...config,
    };

    const response = await axios.get(url, axiosConfig);
    if (axiosConfig.responseType === "blob") {
      return response;
    }
    return response.data;
  } catch (error: any) {
    console.error("Error in getRequest:", error);
    throw new Error(
      error.response?.data?.message || "Network error. Please try again."
    );
  }
};

export const putRequest = async (url: string, data: any, config: any = {}) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...(config.headers || {}),
      },
      ...config,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error in putRequest:", error);
    throw new Error(
      error.response?.data?.message || "Network error. Please try again."
    );
  }
};

export const patchRequest = async (
  url: string,
  data: any = {},
  config: any = {}
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.patch(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...config.headers,
      },
      ...config,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error in patchRequest:", error);
    throw new Error(
      error.response?.data?.message || "Network error. Please try again."
    );
  }
};

export const deleteRequest = async (
  url: string,
  data: any = {},
  config: any = {}
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        ...config.headers,
      },
      data,
      ...config,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error in deleteRequest:", error);
    throw new Error(
      error.response?.data?.message || "Network error. Please try again."
    );
  }
};