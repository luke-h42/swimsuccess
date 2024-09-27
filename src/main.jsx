import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from './components/scroll_top.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
    
  </StrictMode>,
)
