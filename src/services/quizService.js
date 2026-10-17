import api from "./api";

export const endpoints = {
  getQuizzes: () => api.get("/guest/quizzes"),
};
