import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './page'
import { AppId } from './page/[id]'
import './index.css'
import { Header } from 'components/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<AppId />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
