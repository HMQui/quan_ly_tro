import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoomItem from './RoomItem.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoomItem />
  </StrictMode>,
)
