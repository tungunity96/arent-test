import { create } from "zustand";

export const UtilityStore = create((set, get) => ({
  isLoading: false,
  setIsLoading: (val) =>
    set({
      isLoading: val,
    }),
  isShowSnackbar: false,
  snackbarType: "success",
  showSnackbar: (isShowSnackbar, snackbarType) =>
    set({
      isShowSnackbar,
      snackbarType,
    }),
}));
