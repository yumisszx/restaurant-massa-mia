import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import './index.css'
import App from './pages/App'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>

  </React.StrictMode>
)