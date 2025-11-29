import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className='bg-orange-400 text-white p-4'>
      <div className='container mx-auto flex items-stretch'>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='text-xl font-bold'>
              Half Ass Pop
            </Link>
          </li>
          <li>
            <Link href='/about' className='ml-4 text-xl font-normal'>
              About
            </Link>
          </li>
          <li>
            <Link href='/artists' className='ml-4 text-xl font-normal'>
              Artists
            </Link>
          </li>
          <li>
            <Link href='/releases' className='ml-4 text-xl font-normal'>
              Releases
            </Link>
          </li>
          <li>
            <Link href='/news' className='ml-4 text-xl font-normal'>
              News
            </Link>
          </li>
          <li>
            <Link href='/outside-hap' className='ml-4 text-xl font-normal'>
              Outside HAP
            </Link>
          </li>
          <li>
            <Link href='/contact' className='ml-4 text-xl font-normal'>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className='ml-auto'>
          <DarkModeSwitch />
        </div>
        <div className='ml-4 flex items-center'>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in' className='mr-4 text-xl font-normal'>
              Sign In
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
