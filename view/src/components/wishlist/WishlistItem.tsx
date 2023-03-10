import React from 'react'
import { WLBook } from '../../types'
import { useAppDispatch } from "../../hooks/reduxHooks"
import { wlDelete } from "../../redux/wishlist/wishlistSlice"
interface WLBookProps{
    key: string;
    book: WLBook;
}
const WishlistItem = ({book}: WLBookProps) => {
    const dispatch = useAppDispatch();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>  {
        dispatch(wlDelete(book.title))
    }
  return (
    <li className='wishlist--item__container'>
        <p>
            {book.title}
        </p>
        <button className='btn--delete' onClick={handleClick}>Delete</button>
    </li>
  )
}

export default WishlistItem