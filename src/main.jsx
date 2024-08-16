import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { Provider } from 'react-redux'
import store from './redux/store.js'


const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <StrictMode>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </StrictMode>
  </Provider>
)
