import { Flex, Button } from "@/once-ui/components";

export default function Resume() {
  return (
    <Flex direction="column">
      <Flex maxWidth={10} maxHeight={10} justifyContent="center">
        <Button
          href="/TMresume.pdf"
          download="TMresume.pdf"
          variant="primary"
        >
          Download my Resume
        </Button>
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
            tara.v.morin@gmail.com | 304-620-6551 | Purcellville, Virginia |{" "}
            <a href="https://tara-morin.vercel.app" target="_blank" rel="noreferrer">
              Portfolio
            </a>
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
            2025 &nbsp;|&nbsp; GPA: 3.5
          </p>
          <p>
            Relevant Coursework: Data Structures and Algorithms, Research Methods
            and Data Analysis, HCI in Software Development, Machine Learning,
            Software Development Essentials, Software Engineering, Programming
            Languages
          </p>
          <p>
            <strong>UVA in Greece Creative Interaction Design Program</strong>,{" "}
            <i>UX Researcher and Designer</i> (May–June 2024)
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Conducted requirements analysis by interviewing 50+ tourists to assess
              travel needs and challenges
            </li>
            <li>
              Prototyped an interactive historical learning application through 3
              design iterations
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
            Technical Projects
          </h2>

          <p>
            <strong>ML4VA Machine Learning Competition</strong>
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Examined 40 attributes from 1800 Virginia public schools to analyze
              connections to standardized test scores
            </li>
            <li>
              Built a data pipeline using Python, Pandas, and Scikit-learn
            </li>
            <li>
              Fine-tuned K-means clustering, Random Forest regressor, gradient
              descent, and neural network models
            </li>
            <li>
              Earned 3rd out of 50+ teams for models’ success and clarity in an
              accompanying video presentation
            </li>
          </ul>

          <p>
            <strong>StudyBuddy</strong>
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Created a web application for students and working professionals to
              log their tasks and time spent
            </li>
            <li>
              Designed a live task timer and collaborative leaderboard using
              JavaScript for real-time updates
            </li>
            <li>
              Developed backend routing using PHP controllers and integrated with
              SQL for persistent task tracking
            </li>
            <li>
              Styled UI components using Bootstrap Grid & LESS for a responsive
              web interface
            </li>
          </ul>

          <p>
            <strong>Credit System</strong>
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Implemented a budgeting application designed to split costs for
              multiple people
            </li>
            <li>
              Developed a dynamic cost-sharing platform using Angular (TypeScript)
              and SQL-backed PHP API
            </li>
            <li>
              Integrated complex user query handling with SQL and enhanced frontend
              interactivity using TypeScript components
            </li>
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
            <strong>DataAnnotation</strong>, <i>AI Trainer</i> (May 2025–Present)
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Develops comprehensive test suites using Vitest within Docker
              development environments
            </li>
            <li>
              Evaluates AI-generated Python and JavaScript code against detailed
              quality rubrics
            </li>
            <li>
              Builds and Dockerizes codebases for integration into AI training
              workflows
            </li>
          </ul>

          <p>
            <strong>The Players Company</strong>, <i>UX Design Intern</i>{" "}
            (August–December 2024)
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>Designed web interface of financial literacy program</li>
            <li>
              Conducted UX audit to evaluate the user experience in navigating the
              landing page
            </li>
            <li>
              Collaborated with the development team to align design and technical
              implementation
            </li>
          </ul>

          <p>
            <strong>University of Virginia</strong>,{" "}
            <i>Teaching Assistant – Advanced Data Structures and Algorithms</i>{" "}
            (January 2024–May 2025)
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Assisted in debugging Java and Python code in order to pass automated
              tests
            </li>
            <li>
              Provided office hours for 4 hours weekly for a class of over 400
              students
            </li>
            <li>
              Supported students in writing clean, testable code and understanding
              edge cases in algorithms
            </li>
          </ul>

          <p>
            <strong>Wattbuild</strong>, <i>User Research / Software Design Intern</i>{" "}
            (June–August 2024)
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Researched product domain and reported on competing social media in
              the solar power space
            </li>
            <li>
              Created and maintained database on the most common wattages of 30
              household appliances
            </li>
            <li>
              Designed community forum for solar power users to share their systems
              and troubleshoot issues
            </li>
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
              <strong>Languages:</strong> Java, Python, R, C, JavaScript,
              TypeScript, HTML, CSS, SQL, PHP
            </li>
            <li>
              <strong>Frameworks & Tech:</strong> Django, Angular, Heroku, Git,
              Docker, Microsoft Office, Canva, Figma, Framer, OnceUI, Audacity,
              Reaper
            </li>
          </ul>
        </div>
      </Flex>
    </Flex>
  );
}
