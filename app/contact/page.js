import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 lg:flex justify-center items-center max-w-half-screen mb-52 hidden'>
          <div className='space-y-4 font-montserrat'>
            <h1 className='text-4xl italic font-bold'>Are you interested?</h1>
            <p>Send us your contact information or</p>
            <p>Feel free to email us at insertemail@email.com!</p>
          </div>
        </div>
        <hr className='w-px h-screen inline-block bg-slate-950 hidden lg:block'></hr>
        <div className='lg:w-1/2 lg:max-w-half-screen flex flex-col justify-center items-center lg:mb-28 mt-14 lg:m-0 gap-5'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
