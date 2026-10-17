import api from "./api";

export const endpoints = {
  getHealth: () => api.get("/checksession"),
  login: (data) => api.post("/login", data),
  sendLoginOtp: (data) => api.post("/login/send-otp", data),
  signup: (data) => api.post("/register", data),
  sendRegisterOtp: (data) => api.post("/register/send-otp", data),
  verifyOtp: (data) => api.post("/verify-otp", data),
  forgotPassword: (data) => api.post("/forgot-password", data),
  resetPassword: (data) => api.post("/reset-password", data),
  changePassword: (data) => api.post("/change-password", data),
  logout: () => api.post("/logout"),
  getProfile: () => api.get("/profile"),
  updateProfile: (data) => api.post("/profile/update", data),
  getPersonalDetails: () => api.get("/profile/personal-details"),
  updatePersonalDetails: (data) => api.post("/profile/personal-details", data),
  getAddress: () => api.get("/profile/address"),
  updateAddress: (data) => api.post("/profile/address", data),
};