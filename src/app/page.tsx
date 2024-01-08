import About from "@/Components/About"
import Contact from "@/Components/Contact"
import Projects from "@/Components/Projects"

export default function Home() {
  return (
    <main className="container">
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
