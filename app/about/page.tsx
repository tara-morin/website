import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/resume/utils'
import { baseUrl } from 'app/sitemap'
export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Portfolio
        </h1>
        <p className="mb-4">
          {`I'm a rising 4th year at the University of Virginia, double majoring in Computer Science and Cognitive Science.`}
        </p>
      </section>
    )
  }