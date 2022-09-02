import { useState } from 'react'
import { Header } from './components/Header'
import { Page } from './components/Pages/Home';
import { GlobalStyle } from './global'

function App() {

  const [ nav, setNav ] = useState('home');
  const [colorScheme, setColorScheme] = useState('dark');

  function handleChangeNav(name:string){
    setNav(name);
  }

  return (
    <>
      <Header changeNav={handleChangeNav} nav={nav} />
      <Page changeNav={handleChangeNav}/>
      <GlobalStyle />
    </>
  )
}

export default App
