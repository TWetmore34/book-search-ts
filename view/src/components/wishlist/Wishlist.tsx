import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import WishlistItem from './WishlistItem'
import { WLBook } from '../../types'
import { wlFetch } from '../../redux/wishlist/wishlistSlice'
import { useNavigate } from 'react-router'
import { getUser } from '../../redux/api/API'
const Wishlist = () => {
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
    const { list } = useAppSelector(state => state.wishlist)
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(wlFetch())
    },[dispatch])
  return (
    <div className="wishlist__container">
        <p className="text--bold">My Wishlist</p>
        <ul>
            {list?.map((book: any /* when written as WLBook throws an error - not sure why */) => {
                return <WishlistItem key={book.id} book={book} />
            })}
        </ul>
    </div>
  )
}

export default Wishlist