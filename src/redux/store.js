import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./adverts/advertsSlice";
import { favoriteReducer } from "./adverts/favoriteSlice";

const advertsPersistConfig = {
  key: "favorites",
  version: 1,
  storage,
};

const persistedAdvertsReducer = persistReducer(
  advertsPersistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    favorite: persistedAdvertsReducer,
    adverts: advertsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
