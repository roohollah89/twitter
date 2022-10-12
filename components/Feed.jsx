import { SparklesIcon } from '@heroicons/react/24/outline'
import Input from './Input'
import React from 'react'

export default function Feed() {
    return (
        <div className='lg:ml-[300px] border-l border-r border-gray-200 lg:min-w-[576px] ml-[60px] flex-grow max-w-xl'>
            <div className="flex py-2 px-3 sticky bg-white border-b border-gray-200 top-0 z-50 justify-between items-center">
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
                <div className="hoverEffect ">
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />
        </div>
    )
}
