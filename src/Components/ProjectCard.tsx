import Link from "next/link"
export type ProjectCardProps = {
  title: string,
  description: string,
  postLink: string,
  siteLink?: string,
  repoLink: string
}

export default function ProjectCard(props : ProjectCardProps) {
  return (
    <article className="border py-3 px-4 rounded dark:bg-softBlack">
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="text-sm py-1">
          {props.description}
        </p>
        <ul className='flex flex-row gap-5 text-sm py-2 font-bold'>
            <li className='cursor-pointer hover:underline underline-offset-8 hover:text-blueHub'>
              <Link href={props.postLink}>
                Read More
              </Link>
            </li>
            {
              props.siteLink 
              ? <li className='cursor-pointer hover:underline underline-offset-8 hover:text-blueHub'>
                  <a href={props.siteLink} target="_blank">
                    Live Website
                  </a>
                </li> 
              : null
            }
            <li className='cursor-pointer hover:underline underline-offset-8 hover:text-blueHub'>
              <a href={props.repoLink} target="_blank">
                Github Repo
              </a>
            </li>
        </ul>
    </article>
  )
}
