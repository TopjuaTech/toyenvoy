import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export default async function POST(req) {
  const { name, email, message } = await req.json()
  const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: `${name} <${email}>`,
    to: EMAIL_USERNAME,
    subject: 'Toy Envoy - Item Inquiry',
    text: message,
  }

  const isVerified = await transporter.verify()

  if (!isVerified) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 400 })
  }

  await transporter.sendMail(mailOptions)
  return NextResponse.json({ message: 'Email sent successfully' })
}
