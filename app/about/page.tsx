import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/resume/utils'
import { baseUrl } from 'app/sitemap'
import React from "react";
import headshot from "app/rotunda.headshot.jpg"
export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          About Me
        </h1>
        <p className="mb-2">
          {`I am a rising 4th year at the University of Virginia, double majoring in Computer Science and Cognitive Science. `}
        </p>
        <img src="app/rotunda.headshot.jpg" alt="A headshot of Tara at the UVA Rotunda" width="200" height="300"/>
      </section>
    )
  }