import { ThemeProvider } from 'styled-components'
import { createTheme } from 'smarthr-ui'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Messages } from './pages/Messages'
import { Layouts } from './pages/Layouts'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layout" element={<Layouts />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
