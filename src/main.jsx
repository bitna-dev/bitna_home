import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/react'
import globalStyle from '@styles/globalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Global styles={globalStyle} />
    <App />
  </Router>,
)
