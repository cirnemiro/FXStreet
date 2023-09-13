import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import './reset.scss'
import Navbar from './components/navbar/navbar'
import SideNavbar from './components/side-navbar/side-navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layout}>
          <SideNavbar/>
          <div className={styles.layout__content}>  
            <Navbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
