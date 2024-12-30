import { promises as fs } from "fs";
import path from "path";
import { Flex, Button } from "@/once-ui/components";
import {remark} from "/vercel/path0/node_modules/remark/index";
import html from "remark-html";

async function getMarkdownContent() {
    // Read the markdown file
    const filePath = path.join(process.cwd(), "public", "resume.md");
    const fileContents = await fs.readFile(filePath, "utf8");

    // Parse the markdown into HTML
    const parsedMarkdown = await remark().use(html).process(fileContents);
    return parsedMarkdown.toString();
}

export default async function Resume() {
    const markdownHtml = await getMarkdownContent();

    return (
        <Flex fillWidth>
            <Button
                as="a"
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
            </Button>
            <div
                dangerouslySetInnerHTML={{ __html: markdownHtml }}
                style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}
            />
        </Flex>
    );
}
