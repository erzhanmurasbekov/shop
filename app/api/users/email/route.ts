import { NextResponse } from 'next/server'
import { sendMail } from '@/service/mailService'

export async function POST(req: Request) {
  const res = await req.json()
  try {
    await sendMail(
      'Erzhan\'s Shop',
      res.email,
      `Your password: ${res.password}, login: ${res.email}`
    )
    return NextResponse.json({ message: 'Success' })
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message })
  }
}
