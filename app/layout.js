import './globals.css'
import HomeMenu from '@/components/Navbars/BlogMenu'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${raleway.variable} bg-primary overflow-x-hidden`}>
        <HomeMenu />
        {children}
      </body>
    </html>
  )
}
