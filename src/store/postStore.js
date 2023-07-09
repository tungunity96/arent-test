import { create } from "zustand";
import { useUtilityStore } from "./utilityStore";
import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const itemsPerPage = 8;
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const setIsLoading = useUtilityStore.getState().setIsLoading;

export const usePostStore = create((set, get) => ({
  page: 1,
  posts: [],
  canLoadMore: true,
  fetchPosts: async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${API_ENDPOINT}/posts?_page=${get().page}&_limit=${itemsPerPage}`
      );
      await sleep(1000);
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const posts = res.data;
      set({
        page: get().page + 1,
        posts: [...get().posts, ...posts],
        canLoadMore: posts.length >= itemsPerPage,
      });
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  },
}));
