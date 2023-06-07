import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Toy Envoy Logo'
            width={100}
            height={24}
            priority
          />
        </Link>
      </nav>
      <hr className='m-2 border-t-4 border-black' />
    </div>
  )
}
