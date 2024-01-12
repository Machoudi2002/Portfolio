import About from "@/Components/About"
import Contact from "@/Components/Contact"
import Projects from "@/Components/Projects"

export default function Home() {
  return (
    <main className="container">
      <About />
      <Projects />
      <div className="my-4">
        <a href="/Projects">
          <button className="w-full border border-dashed border-4 py-2 px-4 font-bold">
            See More
          </button>
        </a>
      </div>
      <Contact />
    </main>
  )
}
