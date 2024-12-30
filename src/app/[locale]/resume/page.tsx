import { Flex, Button } from "@/once-ui/components";

export default function Resume() {
  return (
    <Flex>
      <Flex maxWidth={10} maxHeight={10}>
        <a
          href="/TMresume.pdf"
          download="TMresume.pdf"
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#a3fcff",
            color: "#12007d",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Download my Resume
        </a>
      </Flex>
      <Flex fillWidth>
        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
            padding: "20px",
            fontFamily: "Calibri",
            lineHeight: 1.6,
            color: "#12007d",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Tara Morin
          </h1>
          <p style={{ textAlign: "center" }}>
            tmn7vs@virginia.edu | 304-620-6551 | Purcellville, Virginia
          </p>
          <hr style={{ margin: "20px 0", border: "1px solid #ccc" }} />
          <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Education
      </h2>
      <p>
        <strong>University of Virginia</strong>, Charlottesville, VA
      </p>
      <p>
        <em>B.A. in Computer Science and B.A. in Cognitive Science</em>, May
        2025
      </p>
      <p>
        Relevant Coursework: Data Structures and Algorithms 1 & 2, Computer
        Systems and Organization, Research Methods and Data Analysis, HCI in
        Software Development, Machine Learning, Software Development Essentials
      </p>
      <p>
        <strong>UVA in Greece Creative Interaction Design Program</strong>, <i>UX
        Researcher and Designer</i> (May-June 2024)
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          Interviewed over 50 tourists as potential users to assess their travel
          needs and challenges
        </li>
        <li>
          Prototyped interactive application for tourists to learn the history
          of Crete through 3 iterations of design
        </li>
        <li>Selected for program along with 11 other students</li>
      </ul>

      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Work Experience
      </h2>
      <p>
        <strong>The Players Company</strong>, <i>UX Design Intern</i>
        (August-December 2024)
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Designed web interface of financial literacy program</li>
        <li>Evaluated user experience in navigating company platforms</li>
        <li>
          Conferenced with members of the development team during sprint
          meetings
        </li>
      </ul>
      <p>
        <strong>University of Virginia</strong>, <i>Teaching Assistant- Advanced
        Data Structures and Algorithms</i> (Spring 2024-Present)
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Provided office hours for 7 hours weekly for a class of over 400 students</li>
        <li>Aided in coding assignments implemented in Java and Python</li>
        <li>Graded exams with attention to detail and scrutiny</li>
        <li>Tutored on algorithms such as BFS, DFS, dynamic programming, and greedy algorithms</li>
      </ul>
      <p>
        <strong>Wattbuild</strong>, <i>User Research/Software Design Intern</i>
        (June-August 2024)
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Researched product domain and reported on competing social media in solar power</li>
        <li>Graphed and maintained database on the most common wattages of 30 household appliances</li>
        <li>
          Designed community forum for solar power users to share their solar
          systems and troubleshoot issues
        </li>
      </ul>

      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Related Experience
      </h2>
      <p>
        <strong>Jaswal Lab</strong>, <i>Research Assistant</i> (Fall 2022-Spring 2024)
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          Transcribed and reviewed interviews with non-speaking autistic individuals and communication regulation partners
        </li>
        <li>Tested Hololens technology for facilitating communication</li>
        <li>
          Read and coded data for a project examining portrayals of autistic
          characters in children’s literature
        </li>
      </ul>
      <p>
        <strong>Lean on Me</strong>, <i>Executive Marketing Chair</i>
        (Spring 2023-Spring 2024)
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Developed advertisements and graphics for campus distribution</li>
        <li>Engaged in conversations with students in non-crisis situations</li>
        <li>Planned events with the executive board</li>
      </ul>
      <p>
        <strong>Virginia Women’s Chorus</strong>, <i>Librarian</i> (January-December
        2022)
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Communicated with the director to gather supplies for rehearsals</li>
        <li>Compiled and distributed over 20 pieces of music for 40 choir members</li>
        <li>Organized music into an electronic database and filing cabinets</li>
      </ul>

      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Skills
      </h2>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          <strong>Programming:</strong> Java, Python, R Studio, C, JavaScript,
          HTML, Next.js, x86 Assembly
        </li>
        <li>
          <strong>Tech:</strong> Microsoft Office, Google Suite, Canva, Figma,
          Framer, Adobe Photoshop, Audacity, Reaper
        </li>
      </ul>
        </div>
      </Flex>
    </Flex>
  );
}
