import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHEBH',
  description: 'Welcome to Dr. Hala Issa Bin Laden Hospital, the leading hospital concerned with health care in the city of Jeddah. Since its establishment, Hala Bin Laden Hospital has moved and continues to move with steady and confident steps on the path to achieving the goals for which it was created, which is to provide a high level of health care for all individuals. Citizens and expatriates alike, in application of the principle of “Health for All.” The hospital has worked to develop and establish specialized medical facilities capable of providing advanced diagnostic and therapeutic services to many patients.',
  keywords: 'Hala,Issa,Hala Issa,Dhebh,Bin Laden,Jeddah,DHEBH,Hospital,Medical,Health,Care,Doctor,Dentist,Emergency,Orthopedic Surgery,Surgery,Kids Clinic,Obstetrics and Gynecology,Cardiology,Urology,Neurology,Ophthalmology,Phsiotherapy,Otolaryngology'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='min-h-screen bg-blue-500'>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
