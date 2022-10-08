import React from 'react'

export default function SidebarMenuItems({ text, Icon, active }) {
    return (
        <div className='hoverEffect flex items-center justify-center text-gray-700 lg:justify-start text-md space-x-3'>
            <Icon className='h-6' />
            <span className={`${active && "font-bold"} hidden lg:inline`}>{text}</span>
        </div>
    )
}
