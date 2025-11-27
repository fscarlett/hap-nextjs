'use client'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === 'system' ? systemTheme : theme
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className='flex items-center justify-center'>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => {
              setTheme('light')
              console.log('light theme')
            }}
            className='text-xl cursor-pointer hover:text-gray-500'
          />
        ) : (
          <MdDarkMode
            onClick={() => {
              setTheme('dark')
              console.log('dark theme')
            }}
            className='text-xl cursor-pointer hover:text-gray-500'
          />
        ))}
    </div>
  )
}
