import "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export function createAxiosInstance(baseURL: string) {
  const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
}

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}
