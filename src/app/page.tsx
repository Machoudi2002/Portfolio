import About from "@/Components/About"
import Contact from "@/Components/Contact"
import Projects from "@/Components/Projects"

export default function Home() {
  return (
    <main className="container">
      <About />
      <h2 className="py-4 text-xl">Projects</h2>
      <Projects />
      <Contact />
    </main>
  )
}
