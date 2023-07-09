import { create } from "zustand";
import axios from "axios";
import { UtilityStore } from "./utilityStore";
import { sleep } from "../helper/utils";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const itemsPerPage = 8;

const setIsLoading = UtilityStore.getState().setIsLoading;

export const PostStore = create((set, get) => ({
  page: 1,
  posts: [],
  canLoadMore: true,
  fetchPosts: async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_ENDPOINT}/posts?_page=${get().page}&_limit=${itemsPerPage}`);
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const posts = res.data;
      set({
        page: get().page + 1,
        posts: [...get().posts, ...posts],
        canLoadMore: posts.length >= itemsPerPage,
      });

      //For Testing
      await sleep(300);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  },
}));
