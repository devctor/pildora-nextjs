import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className='container mx-auto'>
       <nav className='p-12 flex gap-4 uppercase'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">contact</Link>
        <Link href="/listofposts">Blog</Link>
      </nav>
    </header>
  )
}