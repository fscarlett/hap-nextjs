import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-orange-400 text-white p-4'>
      <div className='container mx-auto'>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='text-xl font-bold'>
              Half Ass Pop
            </Link>
          </li>
          <li>
            <Link href='/about' className='ml-4 text-l font-bold'>
              About
            </Link>
          </li>
          <li>
            <Link href='/artists' className='ml-4 text-l font-bold'>
              Artists
            </Link>
          </li>
          <li>
            <Link href='/releases' className='ml-4 text-l font-bold'>
              Releases
            </Link>
          </li>
          <li>
            <Link href='/news' className='ml-4 text-l font-bold'>
              News
            </Link>
          </li>
          <li>
            <Link href='/outside-hap' className='ml-4 text-l font-bold'>
              Outside HAP
            </Link>
          </li>
          <li>
            <Link href='/contact-us' className='ml-4 text-l font-bold'>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
