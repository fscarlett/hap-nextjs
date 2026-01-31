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
                  src='/bartek-mixing.jpg'
                  alt='Bizzartek Mixing'
                  width={50}
                  height={50}
                />
                Bizzartech
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/igc.avif'
                  alt='Its Gonna Crash'
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
                  src='/etacarina-thumbnail-1.png'
                  alt='Etacarina'
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
                  src='/peek-thumbnail-1.png'
                  alt='Peek photo'
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
                  src='/four-point-zero.avif'
                  alt='FourPointZero'
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
