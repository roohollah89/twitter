import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import News from './News'

export default function Widgets({ newResults, newUsers }) {
    const [articleNum, setArticleNum] = useState(3)
    const [userNum, setUserNum] = useState(3)

    const handleAddArticle = () => {
        setArticleNum(articleNum + 3)
    }

    const handleAddUser = () => {
        setUserNum(userNum + 3)
    }

    return (
        <div className='my-2 mx-6 w-full lg:inline hidden ml-8 bg-white'>
            <div className='w-[90%] sticky top-0 bg-white pt-2'>
                <div className='flex items-center'>
                    <MagnifyingGlassIcon className='w-6 h-6 text-gray-500 z-10 absolute top-3.25 left-2' />
                    <input type="text" placeholder='Search Twitter' className='w-[83%] p-2 pl-10 rounded-full focus:outline-none focus:shadow-md bg-gray-100 border-gray-500 focus:border-sky-500 focus:bg-white border-2' />
                </div>
            </div>
            <div className='widgets'>
                <h2 className='font-bold px-4 text-xl mb-4'>What's happening</h2>
                {newResults.slice(0, articleNum).map(article => {
                    return (
                        <News article={article} />
                    )
                })}
                <button onClick={handleAddArticle} className='text-blue-400 px-4'>Show more</button>
            </div>
            <div className="widgets">
                <h4 className='font-bold px-4 text-xl mb-4'>Who to follow</h4>
                {newUsers.slice(0, userNum).map(user =>
                    <div key={user.login.username} className="py-2 my-2 flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-200">
                        <img className='rounded-full' width='40px' src={user.picture.thumbnail} alt="" />
                        <div className='leading-5 w-[40%]'>
                            <h4 className='hover:underline font-bold truncate text-[14px]'>{user.login.username}</h4>
                            <h5 className='hover:underline text-gray-500 truncate text-[13px]'>{user.name.first + ' ' + user.name.last}</h5>
                        </div>
                        <botton className='flex text-sm justify-center items-center w-18 h-8 p-2 bg-black shadow-md font-bold hover:brightness-95 text-white rounded-full disabled:opacity-50"'>Follow</botton>
                    </div>

                )}
                <button onClick={handleAddUser} className='text-blue-400 px-4'>Show more</button>
            </div>
        </div>
    )
}
