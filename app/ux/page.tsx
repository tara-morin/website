import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/resume/utils'
import { baseUrl } from 'app/sitemap'
export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          UX Design Projects
        </h1>
        <p className="mb-2">
          {`Below are links to the 2 large UX design projects I have completed.`}
        </p>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href="https://sites.google.com/view/rumobi/home"
          >
            <p className="ml-2 h-7">RuMoBi</p>
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href="https://sites.google.com/view/teamchimps/home"
          >
            <p className="ml-2 h-7">KitchenSync</p>
          </a>
        </li>
      </section>
    )
  }