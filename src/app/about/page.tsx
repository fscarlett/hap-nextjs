export default function AboutPage() {
  return (
    <main>
      <h1>About HAP</h1>
      <div className='flex flex-col gap-4 mt-18 mb-18'>
        <div className='grid grid-cols-2 gap-6'>
          <div className='text-center'>
            <p>fox headshot</p>
            <p>Fox Scarlett</p>
          </div>
          <div className='text-center'>
            <p>Bartek headshot</p>
            <p>Bartek Lorenz</p>
          </div>
        </div>
        <div className=' text-lg text-center p-10'>
          <p>
            Half Ass Pop is an electronic music label based in Bristol UK.
            Founders Polish DJ/producer Bartek Lorenz and California
            musician/producer Fox Scarlett bring their combined vast range of
            experience to HAP to bring the listener / dancer lots of great
            music!
          </p>
        </div>
      </div>
    </main>
  )
}
