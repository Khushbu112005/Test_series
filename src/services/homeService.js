import api from "./api";

export const endpoints= {
  getStatistics: () => api.get("/statistics"),
  getCourses: () => api.get("/courses"),
};

