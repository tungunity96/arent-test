import { create } from "zustand";
import { UtilityStore } from "./utilityStore";
import { sleep } from "../helper/utils";
import axios from "axios";

const setIsLoading = UtilityStore.getState().setIsLoading;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const recordsPerPage = 8;

export const UserStore = create((set, get) => ({
  diary: [],
  diaryPage: 1,
  diaryLoadMore: true,
  exercises: [],
  tracker: [],
  achiementRate: 0,
  dishes: [],
  dishesPage: 1,
  dishesLoadMore: false,
  dishesType: "",
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
  fetchAchivement: async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_ENDPOINT}/achivement`);
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const achivement = res.data;
      set({
        achiementRate: achivement.rate,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  },
  fetchDishes: async (type) => {
    try {
      setIsLoading(true);
      if (type && type !== get().dishesType) {
        set({
          dishesType: type,
          dishesPage: 1,
          dishes: [],
        });
      }
      const res = await axios.get(
        `${API_ENDPOINT}/dishes?_page=${get().dishesPage}&_limit=${recordsPerPage}`,
        {
          params: {
            ...(get().dishesType ? { type: get().dishesType } : {}),
          },
        }
      );
      if (!res || res.status !== 200) throw new Error("Error occurred!");
      const dishes = res.data;
      set({
        dishesPage: get().dishesPage + 1,
        dishes: [...get().dishes, ...dishes],
        dishesLoadMore: dishes.length >= recordsPerPage,
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
