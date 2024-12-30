import { promises as fs } from "fs";
import path from "path";
import { Flex, Button } from "@/once-ui/components";
import {remark} from "/vercel/path0/node_modules/remark/index";
import html from "remark-html";

// async function getMarkdownContent() {
//     // Read the markdown file
//     const filePath = path.join(process.cwd(), "public", "resume.md");
//     const fileContents = await fs.readFile(filePath, "utf8");

//     // Parse the markdown into HTML
//     const parsedMarkdown = await remark().use(html).process(fileContents);
//     return parsedMarkdown.toString();
// }

export default async function Resume() {
    // const markdownHtml = await getMarkdownContent();

    return (
        <Flex fillWidth>
            <a
                href="/TMresume.pdf"
                download="TMresume.pdf"
                style={{
                    padding: "1rem 2rem",
                    backgroundColor: "#0070f3",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                }}
            >
                Download my Resume
            </a>
            {/* <div
                dangerouslySetInnerHTML={{ __html: markdownHtml }}
                style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}
            /> */}
        <div style="max-width: 800px; margin: auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h1 style="font-size: 2rem; font-weight: bold; text-align: center;">Tara Morin</h1>
  <p style="text-align: center;">tmn7vs@virginia.edu | 304-620-6551 | Purcellville, Virginia</p>
  <hr style="margin: 20px 0; border: 1px solid #ccc;" />

  <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;">Education</h2>
  <p><strong>University of Virginia</strong>, Charlottesville, VA</p>
  <p><em>B.A. in Computer Science and B.A. in Cognitive Science</em>, May 2025</p>
  <p>Relevant Coursework: Data Structures and Algorithms 1 & 2, Computer Systems and Organization, Research Methods and Data Analysis, HCI in Software Development, Machine Learning, Software Development Essentials</p>
  <p><strong>UVA in Greece Creative Interaction Design Program</strong>, UX Researcher and Designer (May-June 2024)</p>
  <ul style="margin-left: 20px;">
    <li>Interviewed over 50 tourists as potential users to assess their travel needs and challenges</li>
    <li>Prototyped interactive application for tourists to learn the history of Crete through 3 iterations of design</li>
    <li>Selected for program along with 11 other students</li>
  </ul>

  <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;">Work Experience</h2>
  <p><strong>The Players Company</strong>, UX Design Intern (August-December 2024)</p>
  <ul style="margin-left: 20px;">
    <li>Designed web interface of financial literacy program</li>
    <li>Evaluated user experience in navigating company platforms</li>
    <li>Conferenced with members of the development team during sprint meetings</li>
  </ul>
  <p><strong>University of Virginia</strong>, Teaching Assistant- Advanced Data Structures and Algorithms (Spring 2024-Present)</p>
  <ul style="margin-left: 20px;">
    <li>Provided office hours for 7 hours weekly for a class of over 400 students</li>
    <li>Aided in coding assignments implemented in Java and Python</li>
    <li>Graded exams with attention to detail and scrutiny</li>
    <li>Tutored on algorithms such as BFS, DFS, dynamic programming, and greedy algorithms</li>
  </ul>
  <p><strong>Wattbuild</strong>, User Research/Software Design Intern (June-August 2024)</p>
  <ul style="margin-left: 20px;">
    <li>Researched product domain and reported on competing social media in solar power</li>
    <li>Graphed and maintained database on the most common wattages of 30 household appliances</li>
    <li>Designed community forum for solar power users to share their solar systems and troubleshoot issues</li>
  </ul>

  <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;">Related Experience</h2>
  <p><strong>Jaswal Lab</strong>, Research Assistant (Fall 2022-Spring 2024)</p>
  <ul style="margin-left: 20px;">
    <li>Transcribed and reviewed interviews with non-speaking autistic individuals and communication regulation partners</li>
    <li>Tested Hololens technology for facilitating communication</li>
    <li>Read and coded data for a project examining portrayals of autistic characters in children’s literature</li>
  </ul>
  <p><strong>Lean on Me</strong>, Executive Marketing Chair (Spring 2023-Spring 2024)</p>
  <ul style="margin-left: 20px;">
    <li>Developed advertisements and graphics for campus distribution</li>
    <li>Engaged in conversations with students in non-crisis situations</li>
    <li>Planned events with the executive board</li>
  </ul>
  <p><strong>Virginia Women’s Chorus</strong>, Librarian (January-December 2022)</p>
  <ul style="margin-left: 20px;">
    <li>Communicated with the director to gather supplies for rehearsals</li>
    <li>Compiled and distributed over 20 pieces of music for 40 choir members</li>
    <li>Organized music into an electronic database and filing cabinets</li>
  </ul>

  <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;">Skills</h2>
  <ul style="margin-left: 20px;">
    <li><strong>Programming:</strong> Java, Python, R Studio, C, JavaScript, HTML, Next.js, x86 Assembly</li>
    <li><strong>Tech:</strong> Microsoft Office, Google Suite, Canva, Figma, Framer, Adobe Photoshop, Audacity, Reaper</li>
  </ul>
</div>

        </Flex>
        
    );
}
