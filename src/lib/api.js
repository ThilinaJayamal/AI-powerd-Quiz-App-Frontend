import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api", // Spring Boot backend
  withCredentials: true, // Send httpOnly cookie automatically
});
