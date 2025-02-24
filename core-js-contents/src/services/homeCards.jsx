import { fetchData } from "./api";

// Fetch user list
export const getHomeCardListData = async () => {
  return fetchData("/7ea0-a6d4-4ec3-9443");
};
