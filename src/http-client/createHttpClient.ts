import axios from "axios";

const createConfig = (baseURL: string) => {
  return {
    baseURL,
    timeout: 30 * 1000,
  };
};

export const createHttpClient = ({ baseURL }: { baseURL: string }) => {
  const client = axios.create(createConfig(`${baseURL}/api`));
  return client;
};
