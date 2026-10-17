import api from "./api";

export const endpoints = {
  getTestSeries: () => api.get("/test-series"),
  getTest: (paper_id) => api.get(`/test-series/${paper_id}`),
};
