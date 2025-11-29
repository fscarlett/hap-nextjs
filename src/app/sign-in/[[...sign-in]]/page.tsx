import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded shadow'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Sign In</h1>
        <SignIn />
      </div>
    </div>
  )
}
