import React from 'react'

export default function News({ article }) {
    return (
        <a href={article.url} target='_blank'>
            <div className='cursor-pointer flex py-2 px-4 items-center hover:bg-gray-200'>
                <div className='flex-col space-y-1'>
                    <h6 className='text-sm mr-2 font-bold'>{article.title}</h6>
                    <p className='text-gray-500 text-xs font-medium'>{article.source.name}</p>
                </div>
                <div>
                    <img className='rounded-lg' src={article.urlToImage} alt="" height='200px' width='200px' />
                </div>
            </div>
        </a>
    )
}
