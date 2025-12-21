export default function HomePage() {
  return (
    <main className='p-4 container max-w-6xl mx-auto border'>
      <h1 className='text-orange-400 text-8xl'>Half Ass Pop</h1>
      <div className='pt-30 pb-20 flex flex-col gap-20'>
        <h2>
          Home of choice club gems from UK, California and other mysterious
          places
        </h2>
        <div>
          <h3>Featuring</h3>
          <ul className='list-square pt-4 text-xl'>
            <li>Bizzartek / Technology Drive</li>
            <li>Its Gonna Crash / Tight</li>
            <li>Peek! / Remixes</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
