import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Widgets() {
    return (

        <div className='my-2 mx-6 w-full lg:inline hidden ml-8'>
            <div className='w-[90%] sticky top-2 '>
                <div className='flex items-center '>
                    <MagnifyingGlassIcon className='w-6 h-6 text-gray-500 z-10 absolute top-2.5 left-2' />
                    <input type="text" placeholder='Search Twitter' className='p-2 pl-10 rounded-full focus:outline-none focus:shadow-md bg-gray-100 border-gray-500 focus:border-sky-500 focus:bg-white border-2' />
                </div>
            </div>
        </div>
    )
}
