import React from 'react'
import { SideBar } from '../components/dashboard/SideBar'
import { Conversations } from '../components/dashboard/conversation/Conversations'
import { Chat } from '../components/dashboard/chat/Chat'

export const Messages = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <Conversations/>
        <Chat/>  
    </div>
  )
}
