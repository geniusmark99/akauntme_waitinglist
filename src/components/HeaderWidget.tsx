import React from 'react'
import { LogoIcon } from './icons'

export default function HeaderWidget() {
    return (
        <header className='flex w-full z-30 justify-between items-center bg-black border-b shadow-sm border-gray-50/5 px-4 md:px-10 py-4 leading-10'>
            <div className='flex text-white align-baseline  items-center gap-x-2'>
                <LogoIcon type='alone' className='size-6 fill-white' />
                <span className='p-0 m-0 font-semibold text-xl'>Akauntme</span>
            </div>

            <div className='px-2 rounded-xl font-semibold group hover:text-white hover:cursor-pointer hover:bg-black transition-all border border-transparent hover:border-white/20 bg-white text-black text-sm leading-10 flex items-center gap-x-1'>
                Launching soon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='size-4 fill-black duration-500 delay-100 transition-transform group-hover:translate-y-[-20px] group-hover:translate-x-4  group-hover:fill-white'>
                    <path d="M23.375 0C22.195313 0.0546875 19.511719 0.335938 16.8125 1.6875C15.710938 2.1875 14.5 3 13.5 4C11.808594 5.691406 9.386719 8.542969 7.375 11L3 11L1 14L4.375 14.90625C4.382813 15.027344 4.433594 15.195313 4.53125 15.4375L4 16.59375C4 16.59375 3.8125 16.992188 5.3125 18.59375C6.914063 20.195313 7.40625 20 7.40625 20L8.65625 19.4375C8.8125 19.484375 8.945313 19.496094 9.03125 19.5L10 23L13 21L13 16.46875C15.46875 14.476563 18.335938 12.109375 20 10.5C21 9.5 21.804688 8.289063 22.40625 7.1875C24.105469 3.585938 24 0 24 0C24 0 23.769531 -0.0195313 23.375 0 Z M 17 5C18.101563 5 19 5.898438 19 7C19 8.101563 18.101563 9 17 9C15.898438 9 15 8.101563 15 7C15 5.898438 15.898438 5 17 5 Z M 2.6875 17C2.488281 17.199219 2.199219 17.394531 2 17.59375C-0.300781 19.894531 0 24 0 24C0 24 4.105469 24.300781 6.40625 22C6.605469 21.800781 6.800781 21.511719 7 21.3125C6.800781 21.210938 6.699219 21.101563 6.5 21C4.601563 22.5 1.6875 22.3125 1.6875 22.3125C1.6875 22.3125 1.5 19.398438 3 17.5C2.898438 17.300781 2.789063 17.199219 2.6875 17Z" />
                </svg>

                <svg className='size-1 group-hover:size-3 will-change-contents translate-x-[-100%] opacity-0 group-hover:opacity-100 transition-transform  group-hover:translate-x-[-10px] group-hover:duration-1000 group-hover:delay-200' xmlns="http://www.w3.org/2000/svg" width="15" height="36" viewBox="0 0 12 16" fill="none" aria-hidden="true">
                    <path className='fill-blue-500 transition-transform group-hover:rotate-[360deg] group-hover:delay-1000' d="M6.65723 6.24707C6.76704 5.91764 7.233 5.91765 7.34281 6.24707L7.98828 8.1835C8.276 9.04666 8.95332 9.72399 9.81648 10.0117L11.7529 10.6572C12.0824 10.767 12.0824 11.233 11.7529 11.3428L9.81649 11.9883C8.95332 12.276 8.27599 12.9533 7.98828 13.8165L7.34281 15.7529C7.233 16.0823 6.76704 16.0823 6.65723 15.7529L6.01173 13.8165C5.72401 12.9533 5.04669 12.276 4.18353 11.9883L2.24707 11.3428C1.91764 11.233 1.91764 10.767 2.24707 10.6572L4.18353 10.0117C5.04669 9.72399 5.72401 9.04667 6.01173 8.18352L6.65723 6.24707Z"></path>
                    <path className='fill-teal-500 transition-transform group-hover:rotate-[360deg] group-hover:delay-[550ms]' d="M2.79434 1.14824C2.86023 0.950586 3.1398 0.950587 3.20569 1.14824L3.59297 2.3101C3.7656 2.828 4.172 3.2344 4.6899 3.40703L5.85177 3.79432C6.04942 3.86021 6.04942 4.13978 5.85177 4.20567L4.6899 4.59296C4.172 4.76559 3.7656 5.17199 3.59297 5.68989L3.20569 6.85176C3.13981 7.04941 2.86023 7.04942 2.79434 6.85176L2.40704 5.68988C2.23441 5.17198 1.82801 4.76559 1.31012 4.59296L0.148241 4.20567C-0.0494137 4.13978 -0.0494138 3.86021 0.148241 3.79432L1.31012 3.40703C1.82802 3.2344 2.23441 2.82801 2.40704 2.31011L2.79434 1.14824Z"></path>
                    <path className='fill-cyan-500 transition-transform group-hover:rotate-[360deg] group-hover:delay-[600ms]' d="M9.8629 0.0988265C9.90682 -0.032943 10.0932 -0.0329419 10.1371 0.098828L10.3953 0.873401C10.5104 1.21867 10.7813 1.4896 11.1266 1.60469L11.9012 1.86288C12.0329 1.9068 12.0329 2.09319 11.9012 2.13711L11.1266 2.39531C10.7813 2.51039 10.5104 2.78133 10.3953 3.12659L10.1371 3.90117C10.0932 4.03294 9.90682 4.03294 9.8629 3.90117L9.6047 3.12659C9.48961 2.78132 9.21868 2.5104 8.87342 2.39531L8.09883 2.13711C7.96706 2.09319 7.96706 1.9068 8.09883 1.86288L8.87342 1.60469C9.21868 1.4896 9.48961 1.21867 9.6047 0.873408L9.8629 0.0988265Z"></path>
                </svg>

            </div>
        </header>
    )
}
