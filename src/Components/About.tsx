import Link from "next/link"

export default function About() {
  return (
    <section className="h-3/4 py-20">
        <h1 className="text-xl py-2">Web Developer</h1>
        <span className="font-bold text-5xl">Otman Machoudi</span>
        <p className="text-sm py-3">
            I'm a Web Developer looking for full time opportunity to work with cool development teams and get even better at what I do...
        </p>
        <button className="py-1 px-3 my-2 border-2 border-dashed font-bold">
            <a href="/machoudiResume.pdf" download>Resume</a>
        </button>
    </section>
  )
}
