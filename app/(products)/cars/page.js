'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const router = useRouter()

  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      <section className='md:flex-row flex-col my-4 mx-9 flex justify-center gap-4 md:max-h-half-screen'>
        <div
          onClick={() => router.push('/cars/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 987px) 100vw, 500px'
            srcset='
            /vintage-item1-300.jpg 300w,
            /vintage-item1-765.jpg 765w,
            /vintage-item1-987.jpg 987w'
            width={100}
            height={10}
            src='/vintage-item1-987.jpg'
            className='w-full object-cover'
            alt='Vintage Car' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold '>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light '>$6000.00</h3>
          </div>
        </div>
        <div
          onClick={() => router.push('/cars/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 987px) 100vw, 500px'
            srcset='
            /vintage-item1-300.jpg 300w,
            /vintage-item1-765.jpg 765w,
            /vintage-item1-987.jpg 987w'
            width={100}
            height={10}
            src='/vintage-item1-987.jpg'
            className='w-full object-cover'
            alt='Vintage Car' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold '>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light '>$6000.00</h3>
          </div>
        </div>
        <div
          onClick={() => router.push('/cars/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 987px) 100vw, 500px'
            srcset='
            /vintage-item1-300.jpg 300w,
            /vintage-item1-765.jpg 765w,
            /vintage-item1-987.jpg 987w'
            width={100}
            height={10}
            src='/vintage-item1-987.jpg'
            className='w-full object-cover'
            alt='Vintage Car' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold '>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light '>$6000.00</h3>
          </div>
        </div>
        <div
          onClick={() => router.push('/cars/brandx')}
          className='card'
          >
          <Image
            sizes='(max-width: 987px) 100vw, 500px'
            srcset='
            /vintage-item1-300.jpg 300w,
            /vintage-item1-765.jpg 765w,
            /vintage-item1-987.jpg 987w'
            width={100}
            height={10}
            src='/vintage-item1-987.jpg'
            className='w-full object-cover'
            alt='Vintage Car' />
          <div className='content font-montserrat'>
            <h2 className='lg:text-4xl text-xl mb-1 font-extrabold '>Brand X Cube</h2>
            <h3 className='lg:text-3xl text-lg mb-2 font-light '>$6000.00</h3>
          </div>
        </div>
      </section>
    </div>
  )
}
