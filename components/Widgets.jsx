import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import News from './News'

export default function Widgets({ newResults }) {
    const [articleNum, setArticleNum] = useState(3)

    const handleAddArticle = () => {
        setArticleNum(articleNum + 3)
    }
    return (
        <div className='my-2 mx-6 w-full lg:inline hidden ml-8'>
            <div className='w-[90%] sticky top-2 '>
                <div className='flex items-center '>
                    <MagnifyingGlassIcon className='w-6 h-6 text-gray-500 z-10 absolute top-2.5 left-2' />
                    <input type="text" placeholder='Search Twitter' className='w-[83%] p-2 pl-10 rounded-full focus:outline-none focus:shadow-md bg-gray-100 border-gray-500 focus:border-sky-500 focus:bg-white border-2' />
                </div>
            </div>
            <div className='mt-4 text-gray-700 py-4 bg-gray-100 rounded-xl w-[90%] xl:w-[75%]'>
                <h2 className='font-bold px-4 text-xl mb-4'>What's happening</h2>
                {newResults.slice(0, articleNum).map(article => {
                    return (
                        <News key={article.id} article={article} />
                    )
                })}
                <button onClick={handleAddArticle} className='text-blue-400 px-4 '>Show more</button>
            </div>
        </div>
    )
}
