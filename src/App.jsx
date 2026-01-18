import './App.css'
import AnimatedCursor from 'react-animated-cursor'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <AnimatedCursor
        innerSize={6}
        outerSize={18}
        color="0, 133, 255"
        outerAlpha={0.25}
        innerScale={1}
        outerScale={1.2}
        outerStyle={{
          border: '2px solid #0085ff',
          zIndex: 9999
        }}
        innerStyle={{
          zIndex: 9999
        }}
        clickables={[
          'a',
          'button',
          '.close_btn',
          '.view_btn',
          '.proj_items',
          '.modal_box',
          'input',
          'textarea',
          'select'
        ]}
      />

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
