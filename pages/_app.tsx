import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useRef } from 'react'
 
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<any>(null);
  return(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
