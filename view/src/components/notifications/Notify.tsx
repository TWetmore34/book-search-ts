import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { WLBook } from '../../types'
const Notify = () => {
    let notifications = useAppSelector(state => state.notifs)
    return (
    <div className='notification__container'>
        <ul>
            {notifications?.map<React.ReactNode>((notif: WLBook) => {
                return <li className='notification--item notification--transition' key={notif.id}>
                    {notif.title} added to wishlist
                </li>
            })}
        </ul>
    </div>
  )
}

export default Notify