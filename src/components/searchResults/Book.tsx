import React, {useState} from 'react'
import { Book } from '../../types'
import { useAppDispatch } from '../../hooks/reduxHooks'
import wishlistSlice from "../../redux/wishlist/wishlistSlice"
import notificationSlice from "../../redux/notifications/notificationSlice"
interface BookProps {
    bookItem: Book;
}

const BookLi = ({bookItem}: BookProps) => {
const formatter = new Intl.ListFormat("en", {style: "long", type: "conjunction"})
  // expansion and overFlowY are for styling. Default state hides lengthy descriptions, while onClick event shows the full page
  const [expand, setExpand] = useState<boolean>(true)
  const [overflowY, setOverflow] = useState<React.CSSProperties>({overflowY: "hidden", height: "30vh"});
  // global wishlist dispatcher
  let dispatch = useAppDispatch()
  // call dispatcher with id and title of current book
  const handleClick = () => {
    dispatch(wishlistSlice.actions.addWishlist({title: bookItem.title, id: bookItem.id}))

    dispatch(notificationSlice.actions.addNotif({title: bookItem.title, id: bookItem.id}))
    setTimeout(() => {
    dispatch(notificationSlice.actions.removeNotif())
    }, 5000)
  }

  const handleExpansion = () => {
    // flip expansion and set styles to either expanded or shrunk
    setExpand(!expand)
    if(expand) {
      setOverflow({overflowY: "visible", height: "auto"})
    } else {
      setOverflow({overflowY: "hidden", height: "30vh"})
    }

  }
  return (
    <li onClick={handleClick}>
        <div className='book--info__container'>
          {bookItem.imgSrc ? <img className='img--responsive' src={bookItem.imgSrc} alt={bookItem.description}></img> : null}
          <div className='book--text__container' style={overflowY}>
            <h3>{bookItem.title}</h3>
            <p>
                <span className="text--bold">Author: </span>{formatter.format(bookItem.authors)}
            </p>
            <p>
                <span className="text--bold">Publisher: </span>{bookItem.publisher ? `Published by ${bookItem.publisher}` : null} {bookItem.publishDate && bookItem.publisher ? `on ${bookItem.publishDate}` : null}
            </p>
            <p>
                <span className="text--bold">Description: </span>{bookItem.description}
            </p>
          </div>
            <button onClick={(e) => {
              e.stopPropagation()
              handleExpansion()
            }} className='btn--expand'>{expand ? "Expand" : "Shrink"}</button>
    </div>
      </li>
  )
}

export default BookLi