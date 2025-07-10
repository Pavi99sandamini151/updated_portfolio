import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from "antd";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
  theme={{
    token: {
      colorPrimary: 'rgb(106, 208, 143)', // Tailwind green
      colorBgBase: '#1f1f1f',
      colorTextBase: '#e5e5e5',
    },
  }}
>
    <App />
    </ConfigProvider>
  </StrictMode>,
)
