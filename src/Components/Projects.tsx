import ProjectCard from "./ProjectCard";
import { ProjectCardProps } from "./ProjectCard";
import { promises as fs } from 'fs';


export default async function Projects() {
  const file = await fs.readFile(process.cwd() + '/src/data.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <section id="Projects" className="flex flex-col gap-5">
      <h2 className="pb-1 pt-5 text-xl">Projects</h2>
      {
        data && data.map((project : ProjectCardProps, id: number) => (
          <div key={id}>
            <ProjectCard 
              title={project.title}
              description={project.description} 
              postLink={project.postLink}
              siteLink={project.siteLink}
              repoLink={project.repoLink}
            />
          </div>
        )) 
      }
        
    </section>
  )
}
