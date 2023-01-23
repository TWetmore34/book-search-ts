import React from 'react'
import BookLi from './Book';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Book, BookState } from '../../types';
import Loading from './Loading';
import Notify from '../notifications/Notify';

const BookList = () => {
    let {bookList: testBook, loading}: BookState = useAppSelector(state => state.books)
  return (
    <div className='app__container'>
        <ul className='booklist'>
          {!loading ? 
          testBook.map<React.ReactNode>((bookItem: Book) => {
              return <BookLi key={bookItem.id} bookItem={bookItem} />
          })
          : 
          <Loading />
        }
        </ul>
        <Notify />
    </div>
  )
}

export default BookList