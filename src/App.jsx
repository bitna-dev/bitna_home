import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '@pages/Home'
import Test from '@pages/Test'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/test" Component={Test} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
