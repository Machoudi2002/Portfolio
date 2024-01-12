import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("src/Projects"));
    const paths = files.map(filename => ({
        slug: filename.replace(".mdx", ""),
    }))
    return paths;
}

function getProject({slug} : {slug : string}) {
    const markdownFile = fs.readFileSync(path.join("src/Projects" + "/" + slug + ".mdx"), "utf8");
    const { data: frontMatter, content} = matter(markdownFile)

    return {
        frontMatter, 
        slug, 
        content
    }
}

export default function Page({params} : any) {
    const props = getProject(params);
    return (
        <article className='prose lg:prose-xl my-20 dark:prose-invert'>
            <h1 className=''>{props.frontMatter.title}</h1>
            <MDXRemote source={props.content} />
        </article>
    )
}