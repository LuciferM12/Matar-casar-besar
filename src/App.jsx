import { useState } from 'react'
import GlobalStyles from './components/GlobalStyles'
import Inicio from './pages/Inicio'
import Header from './components/Header'
import GlobalContextProvider from './context/GlobalContext'


function App() {


  return (
    <>
      <GlobalStyles />
      <Header />
      <GlobalContextProvider>
        <Inicio />
      </GlobalContextProvider>
    </>
  )
}

export default App
