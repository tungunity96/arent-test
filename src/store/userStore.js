import { create } from "zustand";
import axios from "axios";
import { UtilityStore } from "./utilityStore";
import { sleep } from "../helper/utils";

const setIsLoading = UtilityStore.getState().setIsLoading;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const recordsPerPage = 8;

export const UserStore = create((set, get) => ({
  diaryPage: 1,
  diaryLoadMore: true,
  exercises: [],
  diary: [],
  tracker: [],
  fetchDiary: async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_ENDPOINT}/diary?_page=${get().diaryPage}&_limit=${recordsPerPage}`);
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const records = res.data;
      set({
        diaryPage: get().diaryPage + 1,
        diary: [...get().diary, ...records],
        diaryLoadMore: records.length >= recordsPerPage,
      });

      //For Testing
      await sleep(300);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  },
  fetchExercises: async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_ENDPOINT}/exercises`);
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const exercises = res.data;
      set({
        exercises,
      });

      //For Testing
      await sleep(300);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  },
  fetchTracker: async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_ENDPOINT}/tracker`);
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const records = res.data;
      set({
        tracker: records,
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
