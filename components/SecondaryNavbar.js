'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function SecondaryNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col justify-center items-center'>     
      <nav className='nav-main'>
        <ul>
          <li>
            <Link href='/collectibles/brandx' className='active'>
              car toys
            </Link>
          </li>
          <li>
            <Link href='/collectibles/brandx'>
              fashion
            </Link>
          </li>
          <li>
            <Link href='/collectibles/brandx'>
              watches
            </Link>
          </li>
          <li>
            <Link href='/collectibles/brandx'>
              car accessories
            </Link>
          </li>
        </ul>
      </nav>
      <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
        {isOpen
          ? <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
          : <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        }
      </button>
      <hr className='m-0.5 border-t-2 border-black w-96' />
      <Transition
        show={isOpen}
        enter='transition ease-out duration-500'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-300'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
        className="w-full absolute top-32 bg-white h-56 z-10"
      >
        {ref => (
          <nav ref={ref} className='nav-header h-full'>
            <ul>
              <li>
                <Link href='/collectibles/brandx' className='active'>
                  brand x
                </Link>
              </li>
              <li>
                <Link href='/collectibles/brandx'>
                  brand y
                </Link>
              </li>
              <li>
                <Link href='/collectibles/brandx'>
                  brand z
                </Link>
              </li>
              <li>
                <Link href='/collectibles/brandx'>
                  brand a
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Transition>
    </div>
  )
}
