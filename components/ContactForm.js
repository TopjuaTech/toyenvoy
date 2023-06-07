/* eslint-disable no-alert */

'use client'

import React, { useState } from 'react'
import { FiInstagram, FiSend } from 'react-icons/fi'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    if (response.ok) {
      alert('Email sent successfully')
    } else {
      alert('There was a problem sending your email')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 min-w-400 font-montserrat'>
      <h1 className='text-2xl'>CONTACT INFORMATION</h1>
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        value={name}
        onChange={e => setName(e.target.value)}
        className='p-2 border border-gray-300'
      />
      <input
        type='email'
        name='email'
        placeholder='Your Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        className='p-2 border border-gray-300'
      />
      <textarea
        name='message'
        rows='4'
        placeholder='Your Message'
        value={message}
        onChange={e => setMessage(e.target.value)}
        className='p-2 border border-gray-300'
      />
      <button type='submit' className='button-send font-montserrat'>
        Send
      </button>
      <hr />
      <div className='flex justify-center space-x-4'>
        <a href='https://instagram.com/yourusername' target='_blank' rel='noreferrer' className='text-2xl'>
          <FiInstagram />
        </a>
        <a href='https://t.me/yourusername' target='_blank' rel='noreferrer' className='text-2xl'>
          <FiSend />
        </a>
      </div>
      <p className='text-center'>Or message us on Instagram or Telegram!</p>
    </form>
  )
}

export default ContactForm
