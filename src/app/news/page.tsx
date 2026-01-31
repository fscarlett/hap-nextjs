import Link from 'next/link'
import Image from 'next/image'

export default function NewsPage() {
  return (
    <main>
      <h1>News</h1>
      <div className='flex flex-col gap-4 mt-18 mb-18'>
        <ul>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/igc.avif'
                  alt='Bizzartek Mixing'
                  width={50}
                  height={50}
                />
                HAP news item 1
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
                HAP news item 2
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image src='/igc.avif' alt='Etacarina' width={50} height={50} />
                HAP news item 3
              </Link>
            </p>
          </li>

          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/igc.avif'
                  alt='Peek photo'
                  width={50}
                  height={50}
                />
                HAP news item 4
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/igc.avif'
                  alt='FourPointZero'
                  width={50}
                  height={50}
                />
                HAP news item 5
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
