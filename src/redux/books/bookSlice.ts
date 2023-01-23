import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BookState, Book } from "../../types";
import bookAPI from "../api/API";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async (queryString: string) => {
    let data = await bookAPI(queryString);
    return data as Book[]
})

const bookSlice =  createSlice({
    name: "book",
    initialState: {
        loading: false,
        bookList: [],
        error: null
    },
    reducers: {
        getBooks: (state: BookState, action: PayloadAction<Book>) => {
            state.bookList.push(action.payload)
        },
        setLoading: (state: BookState, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchBooks.pending, (state: BookState) => {
            state.loading = true;
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