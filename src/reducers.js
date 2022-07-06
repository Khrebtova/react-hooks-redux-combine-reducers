import { combineReducers } from "redux";
import authorReducer from "./features/authors/authorSlice";
import booksReducer from "./features/books/booksSlice";

const rootReducer = combineReducers({
    authors: authorReducer,
    books: booksReducer,
})

export default rootReducer;