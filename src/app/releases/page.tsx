import Link from 'next/link'
import Image from 'next/image'

export default function ReleasesPage() {
  return (
    <main>
      <h1>Releases</h1>
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
                HAP019 - Bizzartech: Technology Drive
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-mixing.jpg'
                  alt='Its Gonna Crash'
                  width={50}
                  height={50}
                />
                HAP018 - Bizzartech: Crossing Bridge EP
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-mixing.jpg'
                  alt='Etacarina'
                  width={50}
                  height={50}
                />
                HAP017 - Bizzartech: Dramatic Motion EP
              </Link>
            </p>
          </li>

          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/bartek-mixing.jpg'
                  alt='Peek photo'
                  width={50}
                  height={50}
                />
                HAP016 - Bizzartech: Llama EP
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/hap-whiteblush-remixes-coverart.png'
                  alt='White Blush Remixes'
                  width={50}
                  height={50}
                />
                HAP015 - White Blush: Remixes
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
