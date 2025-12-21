export default function HomePage() {
  return (
    <main className='p-4 container max-w-6xl mx-auto'>
      <h1 className='text-orange-400 text-8xl'>Half Ass Pop</h1>
      <div className='pt-30 pb-20 flex flex-col gap-20'>
        <h2>
          Home of choice club gems from UK, California and other mysterious
          places
        </h2>
        <div>
          <h2>Featuring</h2>
          <ul className='list-square pt-4 text-xl '>
            <li>
              <p className='text-2xl italic'> Bizzartek / Technology Drive</p>
            </li>
            <li>
              <p className='text-2xl italic'> Its Gonna Crash / Tight</p>
            </li>
            <li>
              <p className='text-2xl italic'> Peek! / Remixes</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
