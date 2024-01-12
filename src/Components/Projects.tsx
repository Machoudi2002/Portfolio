import ProjectCard from "./ProjectCard";
import fs from 'fs';
import matter from "gray-matter";
import path from 'path';


export default function Projects() {
  const projectDir = "src/Projects"
  const files = fs.readdirSync(path.join(projectDir));
  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(projectDir, filename), 'utf8');
    const { data: frontMatter } = matter(fileContent)
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", "")
    }
  })
  return (
    <section id="Projects" className="flex flex-col gap-5">
      <h2 className="pb-1 pt-5 text-xl">Projects</h2>
      {
         projects.map((project) => (
          <div key={project.slug}>
            <ProjectCard 
              title={project.meta.title}
              description={project.meta.description} 
              postLink={project.meta.postLink}
              siteLink={project.meta.siteLink}
              repoLink={project.meta.repoLink}
            />
          </div>
        )) 
      }
        
    </section>
  )
}
