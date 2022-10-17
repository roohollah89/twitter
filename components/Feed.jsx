import { SparklesIcon } from '@heroicons/react/24/outline'
import Input from './Input'
import React from 'react'
import Post from './Post'

export default function Feed() {

    const posts = [
        {
            id: '1',
            name: 'roohollah babaei',
            userName: 'developer',
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVF1dospej2VMDF0sb-TuNCYudETDT6UKVQ&usqp=CAU",
            img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
            text: 'nice view',
            timeStamp: '2 hours ago'
        },
        {
            id: '2',
            name: 'roohollah babaei',
            userName: 'developer',
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVF1dospej2VMDF0sb-TuNCYudETDT6UKVQ&usqp=CAU",
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            text: 'amazing',
            timeStamp: '3 hours ago'
        }
    ]
    return (
        <div className='lg:ml-[300px] border-l border-r border-gray-200 lg:min-w-[576px] ml-[60px] flex-grow max-w-xl overflow-scroll'>
            <div className="flex py-2 px-3 sticky bg-white border-b border-gray-200 top-0 z-50 justify-between items-center">
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
                <div className="hoverEffect ">
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}
