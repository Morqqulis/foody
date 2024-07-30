'use client'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

const queryClient = new QueryClient()

const QueryProvider: React.FC = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // gcTime: 1000 * 60 * 60 * 21
          }
        }
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition={'top-left'} initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default QueryProvider
