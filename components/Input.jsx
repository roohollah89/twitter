import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function () {
    return (
        <div className='flex justify-between  h-auto p-3 border-b '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVF1dospej2VMDF0sb-TuNCYudETDT6UKVQ&usqp=CAU"
                className='h-10 w-10 rounded-full mr-5' />
            <div className='flex-1 pt-1.5'>
                <textarea className='text-lg w-full h-24 placeholder-gray-600 focus:outline-none tracking-wide min-h-[50px] text-gray-700' cols="30" rows="5" placeholder='Whats happening'></textarea>
                <div className='flex justify-between items-center py-2 px-2 border-t border-gray-200'>
                    <div className='flex text-sky-500'>
                        <PhotoIcon className=' hoverEffect w-10 h-10 p-2 hover:text-sky-300' />
                        <FaceSmileIcon className=' hoverEffect w-10 h-10 p-2 hover:text-sky-300' />
                    </div>
                    <div>
                        <button className='flex justify-center items-center w-20 h-8 p-5 bg-blue-500 shadow-md font-bold hover:brightness-95  text-white rounded-full disabled:opacity-50'>Tweet</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
