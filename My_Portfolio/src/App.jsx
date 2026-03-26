import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <main className='bg-brand-bg min-h-screen '>
    <div className='px-6 border-b border-brand-border'>
      <Navbar/>
    </div>
    <div className='Hero px-5 py-8'>
    <Hero/>
    </div>
    </main>
  )
}

export default App
