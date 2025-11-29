export default function Footer() {
  return (
    <footer className='bg-orange-400 text-black p-4 absolute bottom-0 w-full mt-8'>
      <div className='container mx-auto'>
        <p>
          &copy; 2012 - {new Date().getFullYear()} Half Ass Pop. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
