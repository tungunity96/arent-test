import { create } from "zustand";

export const useUtilityStore = create((set, get) => ({
  isLoading: false,
  setIsLoading: (val) =>
    set({
      loading: val,
    }),
  isShowSnackbar: false,
  snackbarType: "success",
  showSnackbar: (isShowSnackbar, snackbarType) =>
    set({
      isShowSnackbar,
      snackbarType,
    }),
}));
