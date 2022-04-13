import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./NotesSlice.js";

 const store = configureStore({
    reducer: {
        notes: NotesSlice,
    },

});
export default store;
