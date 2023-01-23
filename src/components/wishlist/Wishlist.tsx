import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import WishlistItem from './WishlistItem'
import { WLBook } from '../../types'

const Wishlist = () => {
    const wishlistState = useAppSelector(state => state.wishlist)
  return (
    <div className="wishlist__container">
        <p className="text--bold">My Wishlist</p>
        <ul>
            {Object.values<WLBook[]>(wishlistState)
            .map<React.ReactNode>((book: any /* when written as WLBook throws an error - not sure why */) => {
                return <WishlistItem key={book.id} book={book} />
            })}
        </ul>
    </div>
  )
}

export default Wishlist