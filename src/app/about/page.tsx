import Image from 'next/image'

export default function AboutPage() {
  return (
    <main>
      <h1>About HAP</h1>
      <div className='flex flex-col gap-4 mt-18 mb-18'>
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-col items-center'>
            <Image
              src='/fox-hap-headshot.jpg'
              alt='Fox Scarlett'
              width={150}
              height={150}
            />
            <p className='mt-4'>Fox Scarlett</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='/bartek-hap-headshot.jpg'
              alt='Bartek Lorenz'
              width={150}
              height={150}
            />
            <p className='mt-4'>Bartek Lorenz</p>
          </div>
        </div>
        <div className='text-2xl text-center p-10'>
          <p className='mb-4 text-2xl'>
            Half Ass Pop is an electronic music label based in Bristol UK.
          </p>

          <p className='text-2xl'>
            Founders Polish DJ/producer Bartek Lorenz and California
            musician/producer Fox Scarlett bring their combined vast range of
            experience to HAP to bring the listener / dancer lots of great
            music!
          </p>
        </div>
        <div className='p-10 mt-24'>
          <Image
            className='w-full shadow-[0px_0px_49px_50px_rgba(0,0,0,1)]'
            src='/hap-about-page-img-rough.png'
            alt='times square nyc'
            width={300}
            height={300}
          />
        </div>
      </div>
    </main>
  )
}
