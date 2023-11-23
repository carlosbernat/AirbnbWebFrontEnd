import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig = {
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  //   devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
