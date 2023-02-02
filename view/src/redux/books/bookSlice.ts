import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BookState, Book } from "../../types";
import { getBooksAPI } from "../api/API";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async (queryString: string) => {
    let data = await getBooksAPI(queryString);
    return data as Book[]
})

const bookSlice =  createSlice({
    name: "book",
    initialState: {
        loading: false,
        bookList: [],
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBooks.pending, (state: BookState) => {
            state.loading = true;
            console.log(builder)
        })
        builder.addCase(fetchBooks.fulfilled, (state: BookState, action: PayloadAction<any>) => {
            state.loading = false;
            state.bookList = action.payload.items.map((book: any) => {
                return {
                    id: book.id, 
                    title: book.volumeInfo.title, 
                    publisher: book.volumeInfo.publisher, 
                    publishDate: book.volumeInfo.publishedDate, 
                    description: book.volumeInfo.description, 
                    imgSrc: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "",
                    authors: book.volumeInfo.authors
                }
            })
            
        })
        builder.addCase(fetchBooks.rejected, (state: BookState, action) => {
            state.loading = false;
            state.bookList = [];
            state.error = action.error
        })
    }
})
export default bookSlice