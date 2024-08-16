import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';


const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <MantineProvider  defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
)
