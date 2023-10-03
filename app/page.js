import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      
      <div className='row'>
        <div className='image-row'>
          <Image
            sizes='(max-width: 1200px) 100vw, 1200px'
            srcSet='
            /vintage-car-300.jpg 300w,
            /vintage-car-903.jpg 903w,
            /vintage-car-1200.jpg 1200w'
            src='/vintage-car-1200.jpg'
            width={100}
            height={10}
            className='w-full object-cover h-96'
            alt='Vintage car' />
          <div className='image-caption'>
            <Link href='/cars' className='caption'>
              cars
            </Link>
          </div>
        </div>
        <div className='image-row'>
          <Image
            sizes='(max-width: 1200px) 100vw, 1200px'
            srcset='
            /cube-300.jpg 300w,
            /cube-839.jpg 839w,
            /cube-1200.jpg 1200w'
            src='/cube-1200.jpg'
            width={100}
            height={10}
            className='w-full object-cover h-96'
            alt='Cube' />
          <div className='image-caption'>
            <Link href='/collectibles' className='caption'>
              collectibles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
