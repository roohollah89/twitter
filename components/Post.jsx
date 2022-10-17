import { ChartBarIcon, ChatBubbleLeftIcon, EllipsisHorizontalIcon, HeartIcon, TrashIcon, ShareIcon } from '@heroicons/react/24/outline'

import React from 'react'

export default function Post({ post }) {
    return (
        <div className='px-3 mt-3 flex items-start justify-between h-82 cursor-pointer border-b pb-2'>
            <img className='h-11 w-11 rounded-full mr-4' src={post?.userImg} alt="" />
            <div className='felx-1'>
                <div className='flex justify-between items-center mt-1' >
                    <div className='flex gap-2 whitespace-nowrap'>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post?.name}</h4>
                        <span className='text-sm sm:text-[15px] hover:underline'>@{post?.userName}</span>
                        <span className='text-sm sm:text-[15px] hover:underline'>-{post?.timeStamp}</span>
                    </div>
                    <div>
                        <EllipsisHorizontalIcon className='h-8 w-8 hover:text-sky-500 hover:bg-sky-100 rounded-full' />
                    </div>
                </div>
                <p className='mb-2'>{post?.text}</p>
                <img src={post?.img} className='rounded-xl' />
                <div className=' flex justify-around text-gray-500 p-2'>
                    <ChatBubbleLeftIcon className='iconPosts hoverEffect hover:bg-sky-100 hover:text-sky-600' />
                    <TrashIcon className='iconPosts hoverEffect hover:bg-red-100 hover:text-red-600' />
                    <HeartIcon className='iconPosts hoverEffect text-red-600 hover:bg-red-100' />
                    <ShareIcon className='iconPosts hoverEffect hover:bg-sky-100 hover:text-sky-600' />
                    <ChartBarIcon className='iconPosts hoverEffect hover:bg-sky-100 hover:text-sky-600' />
                </div>
            </div>
        </div>
    )
}
