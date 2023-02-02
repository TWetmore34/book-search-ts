import React, { useEffect } from 'react'
import BookLi from './Book';
import Search from './Search';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Book, BookState } from '../../types';
import Loading from './Loading';
import Notify from '../notifications/Notify';
import { getUser } from '../../redux/api/API';
import { useNavigate } from 'react-router';
const BookList = () => {
    let {bookList: testBook, loading}: BookState = useAppSelector(state => state.books)
    let navigate = useNavigate()
    useEffect(() => {
      let loader = async () => {
        const loggedIn = await getUser()
        if(!loggedIn) {
          return navigate("/")
        }
      }
      loader()
    },[navigate])
  return (
    <>
    <Search />
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
    </>
  )
}

export default BookList