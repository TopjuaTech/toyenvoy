'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const router = useRouter()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: 'free-snap',
    spacing: 15,
  })

  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      <section className='md:flex-row flex-col my-4 mx-9 flex justify-center gap-4 md:max-h-half-screen'>
        <div ref={sliderRef} className='keen-slider slider'>
          <div className='keen-slider__slide'>
            <div>
              <Image
                sizes='(max-width: 1200px) 100vw, 500px'
                srcset='
                /cube-300.jpg 300w,
                /cube-839.jpg 839w,
                /cube-1200.jpg 1200w'
                width={100}
                height={10}
                src='/cube-1200.jpg'
                className='w-full object-cover grabbable'
                alt='Cube' />
            </div>
          </div>
          <div className='keen-slider__slide'>
            <div>
              <Image
                sizes='(max-width: 1200px) 100vw, 500px'
                srcset='
                /cube-300.jpg 300w,
                /cube-839.jpg 839w,
                /cube-1200.jpg 1200w'
                width={100}
                height={10}
                src='/cube-1200.jpg'
                className='w-full object-cover grabbable'
                alt='Cube' />
            </div>
          </div>
          <div className='keen-slider__slide'>
            <div>
              <Image
                sizes='(max-width: 1200px) 100vw, 500px'
                srcset='
                /cube-300.jpg 300w,
                /cube-839.jpg 839w,
                /cube-1200.jpg 1200w'
                width={100}
                height={10}
                src='/cube-1200.jpg'
                className='w-full object-cover grabbable'
                alt='Cube' />
            </div>
          </div>
          <button onClick={() => slider.current.prev()} className='previous'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={() => slider.current.next()} className='next'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <div className='content font-montserrat'>
          <h2 className='text-4xl mb-1 font-extrabold'>Brand X Cube</h2>
          <h3 className='text-3xl mb-2 font-light'>$6000.00</h3>
          <button type='button' className='button-interested ' onClick={() => router.push('/contact')}>
            Interested?
          </button>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
           sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
           est laborum.
          </p>
        </div>
      </section>
      <hr className='md:block hidden my-2 border-t-2 border-black' />
      <div className='md:flex justify-evenly gap-4 hidden'>
        <Image
          sizes='(max-width: 1200px) 100vw, 400px'
          srcset='
          /cube-300.jpg 300w,
          /cube-839.jpg 839w,
          /cube-1200.jpg 1200w'
          width={100}
          height={10}
          src='/cube-1200.jpg'
          className='w-full cursor-pointer'
          onClick={() => slider.current.moveToIdx(0)}
          alt='Cube' />
        <Image
          sizes='(max-width: 1200px) 100vw, 400px'
          srcset='
          /cube-300.jpg 300w,
          /cube-839.jpg 839w,
          /cube-1200.jpg 1200w'
          width={100}
          height={10}
          src='/cube-1200.jpg'
          className='w-full cursor-pointer'
          onClick={() => slider.current.moveToIdx(1)}
          alt='Cube' />
        <Image
          sizes='(max-width: 1200px) 100vw, 400px'
          srcset='
          /cube-300.jpg 300w,
          /cube-839.jpg 839w,
          /cube-1200.jpg 1200w'
          width={100}
          height={10}
          src='/cube-1200.jpg'
          className='w-full cursor-pointer'
          onClick={() => slider.current.moveToIdx(2)}
          alt='Cube' />
      </div>
    </div>
  )
}
