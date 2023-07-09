import { create } from "zustand";
import axios from "axios";
import { useUtilityStore} from "./utilityStore"


const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const itemsPerPage = 8;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const setIsLoading = useUtilityStore.getState().setIsLoading;

export const usePostStore = create((set, get) => ({
  page: 1,
  posts: [],
  canLoadMore: true,
  fetchPosts: async () => {
    try{
      setIsLoading(true);
      const res = await axios.get(
        `${API_ENDPOINT}/posts?_page=${get().page}&_limit=${itemsPerPage}`
      );
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const posts = res.data;
      set({
        page: get().page + 1,
        posts: [...get().posts, ...posts],
        canLoadMore: posts.length >= itemsPerPage,
      });
      
      //For Testing
      await sleep(300);
    } catch (error){
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  },
}));
