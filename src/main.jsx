import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-teal-900 mx-4 p-1 text-white'>

    <RouterProvider router={router}/>
    </div>

                                                                           
  </StrictMode>,
)
 