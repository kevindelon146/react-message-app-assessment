import apiClient from "./axiosInstance";

const MESSAGE_URL = "messages/";

export const getMessages = () => apiClient.get(MESSAGE_URL);
export const createMessage = (message: { content: string }) =>
  apiClient.post(MESSAGE_URL, message);
export const deleteMessage = (id: number) =>
  apiClient.delete(`${MESSAGE_URL}${id}/`);
export const updateMessage = (id: number, message: { content: string }) =>
  apiClient.put(`${MESSAGE_URL}${id}/`, message);
