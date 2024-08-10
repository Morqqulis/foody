'use client'

import React, { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { usePathname, useSearchParams } from 'next/navigation'

const TopLoadingBar: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => {
      setProgress(40)
    }

    const handleComplete = () => {
      setProgress(100)
    }

    handleStart()

    const timer = setTimeout(() => {
      handleComplete()
    }, 500)

    return () => {
      clearTimeout(timer)
      setProgress(0)
    }
  }, [pathname, searchParams])

  return <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
}

export default TopLoadingBar
