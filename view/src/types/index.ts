import { SerializedError } from "@reduxjs/toolkit";

export interface WLBook {
    title: string;
    id: string;
}

export interface WLState {
    [key: string]: WLBook
}

export interface Book {
    id: string;
    title: string;
    publisher: string;
    publishDate: string; 
    description: string;
    imgSrc: string;
    authors: string[];
    notify: boolean;
}

export interface BookState {
    loading: boolean | null;
    bookList: Book[];
    error: SerializedError | null;
}