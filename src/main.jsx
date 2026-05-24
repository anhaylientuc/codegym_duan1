import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FoodGroupsManagement } from './staff/components/FoodGroupsManagement.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodGroupsManagement/>
  </StrictMode>,
)
