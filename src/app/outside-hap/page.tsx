import Image from 'next/image'
import Link from 'next/link'

export default function OutsideHapPage() {
  return (
    <main>
      <h1>Outside HAP</h1>
      <div className='flex flex-col gap-4 mt-18 mb-18'>
        <ul>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/hap-logo-rip.png'
                  alt='Bizzartek Mixing'
                  width={50}
                  height={50}
                />
                cool release 1
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/hap-logo-rip.png'
                  alt='Its Gonna Crash'
                  width={50}
                  height={50}
                />
                cool release 2
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/hap-logo-rip.png'
                  alt='Etacarina'
                  width={50}
                  height={50}
                />
                cool release 3
              </Link>
            </p>
          </li>

          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/hap-logo-rip.png'
                  alt='Peek photo'
                  width={50}
                  height={50}
                />
                cool release 4
              </Link>
            </p>
          </li>
          <li>
            <p className='text-xl mt-4'>
              <Link href='/' className='flex flex-row items-start gap-4'>
                <Image
                  src='/hap-logo-rip.png'
                  alt='FourPointZero'
                  width={50}
                  height={50}
                />
                cool release 5
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
