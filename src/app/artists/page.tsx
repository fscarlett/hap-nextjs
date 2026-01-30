import Link from 'next/link'
import Image from 'next/image'

export default function ArtistsPage() {
  return (
    <main>
      <h1>Artists</h1>
      <div className='flex flex-col gap-4 mt-18 mb-18'>
        <ul>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-hap-headshot.jpg'
                  alt='Bartek Hap Headshot'
                  width={50}
                  height={50}
                />
                Bizzartek
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-hap-headshot.jpg'
                  alt='Bartek Hap Headshot'
                  width={50}
                  height={50}
                />
                Its Gonna Crash
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-hap-headshot.jpg'
                  alt='Bartek Hap Headshot'
                  width={50}
                  height={50}
                />
                Etacarina
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-hap-headshot.jpg'
                  alt='Bartek Hap Headshot'
                  width={50}
                  height={50}
                />
                White Blush
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-hap-headshot.jpg'
                  alt='Bartek Hap Headshot'
                  width={50}
                  height={50}
                />
                PEEK!
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-hap-headshot.jpg'
                  alt='Bartek Hap Headshot'
                  width={50}
                  height={50}
                />
                FourPointZero
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
