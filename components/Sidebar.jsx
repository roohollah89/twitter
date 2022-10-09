import React from 'react'
import Image from 'next/image'
import SidebarMenuItems from './SidebarMenuItems'
import { HashtagIcon, HomeIcon } from '@heroicons/react/24/solid'
import { BellIcon, BookmarkIcon, ClipboardIcon, UserIcon, InboxIcon, EllipsisHorizontalIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
    return (
        <div className='hidden sm:flex flex-col p-2 lg:items-start fixed h-full justify-between'>
            {/* {twitter logo} */}
            <Image className='hoverEffect p-0 rounded-none lg:px-1 hovr:bg-blue-500'
                src='https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png' width={30}
                height={30}></Image>
            {/* {menu} */}
            <div className='lg:items-start'>
                <SidebarMenuItems text="Home" Icon={HomeIcon} active />
                <SidebarMenuItems text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItems text="Notifications" Icon={BellIcon} />
                <SidebarMenuItems text="Message" Icon={InboxIcon} />
                <SidebarMenuItems text="BookMarks" Icon={BookmarkIcon} />
                <SidebarMenuItems text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItems text="Profile" Icon={UserIcon} />
                <SidebarMenuItems text="More" Icon={EllipsisHorizontalCircleIcon} />
            </div>
            {/* {button} */}
            <button className='bg-blue-400 rounded-full hidden lg:inline text-white w-48 h-12 hover:brightness-95 font-bold'>twitt</button>
            {/* {mini profile} */}
            <div className='hoverEffect flex items-center justify-center text-gray-700 lg:justify-start text-md space-x-3'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVF1dospej2VMDF0sb-TuNCYudETDT6UKVQ&usqp=CAU"
                    className='h-10 w-10 rounded-full' />
                <div className='leading-5 hidden lg:inline'>
                    <h4 className='font-bold'>roohollah babaei</h4>
                    <p className='text-gray-500'>web-developer</p>
                </div>
                <EllipsisHorizontalIcon className='h-5 lg:ml-8 hidden lg:inline' />
            </div>
        </div>
    )
}
