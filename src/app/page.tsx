import About from "@/Components/About"
import Contact from "@/Components/Contact"
import Projects from "@/Components/Projects"

export default function Home() {
  return (
    <main className="container">
      <About />
      <Projects />
      {/*
        <div className="my-4">
          <a href="/Projects">
            <button className="w-full border rounded py-2 px-4 font-bold bg-softBlack">
              See More
            </button>
          </a>
        </div>
      */}
      <Contact />
    </main>
  )
}
