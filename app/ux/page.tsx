import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/resume/utils'
import { baseUrl } from 'app/sitemap'
import Image from 'next/image';
import kitchen from 'app/ux/KitchenSync (2).jpg'
import rumobi from 'app/ux/rumobi.jpg'
export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          UX Design Projects
        </h1>
        <p className="mb-2">
          {`Below are links to the 2 large UX design projects I have completed.`}
        </p>
        
          <a
            className="text-color1"
            rel="noopener noreferrer"
            href="https://sites.google.com/view/rumobi/home"
          >
            <p className="ml-2 h-7">RuMoBi</p>
          </a>
          <Image src={rumobi} alt="The opening screen of RuMoBi" width="150" height="350"/>
          <p>
            RuMoBi is the design project I created in a 3 person team during my Creative Interaction Design intensive in the summer of 2024. Our task was to create an app that would enhance the experience of tourists in the city of Heraklion, Crete where we were residing. We conducted interviews with over 30 tourists from a variety of countries, and found that many tourists were bored by the way history was presented at the various histocial sites near the city. Therefore we created RuMoBi, an interactive game where users can collect characters and artifacts as they walk around the city. Each of the weeks on the site reflects a design iteration: Week 1 was comprised of interviews and a low fidelity paper prototype, Week 2 featured a medium prototype created in Figma, and Week 3 had a high fidelity prototype. 
          </p>
        
          <a
            className="text-color1"
            rel="noopener noreferrer"
            href="https://sites.google.com/view/teamchimps/home"
          >
            <p className="ml-2 h-7">KitchenSync</p>
          </a>
          <Image src={kitchen} alt="The logo of KitchenSync." width="400" height="100"/>
          <p>
            KitchenSync is a semester long design project in which I led a team of 5 as project manager. The app was designed to streamline all activities related to diet, from making a grocery list, finding a nearby store, montioring nutrients and calories, and tracking a grocery budget. We developed KitchenSync through the 4 phases of the UX lifecycle: Research/Analysis, Design, Prototyping, and Evaluation. 
          </p>
          <a
            className="text-color2"
          >
            <p className="ml-2 h-7">Note: currently the links for Phase 3 and 4 are not active due to the Google site switching domains. I am in contact with the owner of the site to get this issue resolved.</p>
          </a>
        
      </section>
    )
  }