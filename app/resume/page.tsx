import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Resume</h1>
      <BlogPosts />
    
    <p className="mb-2">
      {'Linked above is the most recent version of my resume.'}
    </p>

    </section>
  )
}
