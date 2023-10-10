
import { Contact } from './component/contact/Contact'
import { Header } from './component/header/Header'
import { Hero } from './component/hero/Hero'
import { Main } from './component/main/Main'
import './index.css'
function App() {

  return (
    <div className='container'>
    <Header/>
    <div className='divider'/>

    <Hero/>
    <div className='divider'/>
    <Main/>
    <div className='divider'/>

    <Contact/>

     
    </div>
  )
}

export default App
