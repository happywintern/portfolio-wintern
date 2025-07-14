// src/app/page.js
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Reveal from '../components/Reveal'
import Projects from '../components/Project'
import Experience from '../components/Experience'
import Volunteer from '../components/Volunteer'


export default function Home() {
  return (
    <>
      <div className="px-6 pt-6">

       <Navbar />
      <Hero />
      
      <Reveal delay={0.2}>
        <About />
      </Reveal>

      <Reveal delay={0.2}>
        <Projects />
      </Reveal>

      <Reveal delay={0.3}>
        <Experience />
      </Reveal>

      <Reveal delay={0.3}>
        <Volunteer />
      </Reveal>

      </div>
    </>
  )
}
