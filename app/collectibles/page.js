'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import SecondaryNavbar from '@/components/SecondaryNavbar'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const router = useRouter()

  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      <SecondaryNavbar />
      <section className='md:flex-row flex-col my-4 mx-9 flex justify-center gap-4 md:max-h-half-screen'>
        <div
          onClick={() => router.push('/collectibles/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 1200px) 100vw, 500px'
            srcset='
            /cube-300.jpg 300w,
            /cube-839.jpg 839w,
            /cube-1200.jpg 1200w'
            width={100}
            height={10}
            src='/cube-1200.jpg'
            className='w-full object-cover'
            alt='Cube' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold'>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light'>$6000.00</h3>
          </div>
        </div>
        <div
          onClick={() => router.push('/collectibles/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 1200px) 100vw, 500px'
            srcset='
            /cube-300.jpg 300w,
            /cube-839.jpg 839w,
            /cube-1200.jpg 1200w'
            width={100}
            height={10}
            src='/cube-1200.jpg'
            className='w-full object-cover'
            alt='Cube' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold'>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light'>$6000.00</h3>
          </div>
        </div>
        <div
          onClick={() => router.push('/collectibles/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 1200px) 100vw, 500px'
            srcset='
            /cube-300.jpg 300w,
            /cube-839.jpg 839w,
            /cube-1200.jpg 1200w'
            width={100}
            height={10}
            src='/cube-1200.jpg'
            className='w-full object-cover'
            alt='Cube' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold'>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light'>$6000.00</h3>
          </div>
        </div>
        <div
          onClick={() => router.push('/collectibles/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 1200px) 100vw, 500px'
            srcset='
            /cube-300.jpg 300w,
            /cube-839.jpg 839w,
            /cube-1200.jpg 1200w'
            width={100}
            height={10}
            src='/cube-1200.jpg'
            className='w-full object-cover'
            alt='Cube' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold'>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light'>$6000.00</h3>
          </div>
        </div>
      </section>
    </div>
  )
}
