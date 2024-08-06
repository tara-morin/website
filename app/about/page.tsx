import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/resume/utils'
import { baseUrl } from 'app/sitemap'
import React from "react";
import Image from 'next/image';
import headshot from 'app/about/rotunda.headshot.jpg'

export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          About Me
        </h1>
        <Image src={headshot} alt="A headshot of Tara at the UVA Rotunda" width="200" height="300"/>
        <p className="mb-2">
          {`I am a rising 4th year at the University of Virginia, double majoring in Computer Science and Cognitive Science. Post graduation, my goal is to find a job working UX design, software design, or software development. My hope is that my degree in Computer Science will provide the technical skills necessary for me to succeed in the software industry, and my degree in Cognitive Science will give me better insight into how a user thinks about and interacts with an app or website.  `}
        </p>
      </section>
    )
  }