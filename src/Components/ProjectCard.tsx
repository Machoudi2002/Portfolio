

export default function ProjectCard() {
  return (
    <article>
        <h3 className="font-bold text-lg py-1">JobApplic - FullStack MERN</h3>
        <p className="text-sm py-1">
            Company Career Section - Job Posting and Applying - Admin Dashboard - Editing and Deleting Existing Jobs -
            Tracking The number of Jobs and Applications - Check The Applications inside the website...
        </p>
        <ul className='flex flex-row gap-5 text-sm py-2'>
            <li className='cursor-pointer'>Read More</li>
            <li className='cursor-pointer'>Live Website</li>
            <li className='cursor-pointer'>Github Repo</li>
        </ul>
    </article>
  )
}
