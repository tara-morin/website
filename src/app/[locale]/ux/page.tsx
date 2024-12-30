import { Flex } from "@/once-ui/components";
import { promises as fs } from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import { unstable_setRequestLocale } from "next-intl/server";

export async function getStaticProps() {
    // Read the markdown file
    const filePath = path.join(process.cwd(), "public", "resume.md");
    const fileContents = await fs.readFile(filePath, "utf8");

    // Parse the markdown into HTML
    const parsedMarkdown = await remark().use(html).process(fileContents);
    const markdownHtml = parsedMarkdown.toString();

    return {
        props: {
            markdownHtml,
        },
    };
}

export default function Resume(
    { params: { locale }, markdownHtml }: { params: { locale: string }; markdownHtml: string }
) {
    unstable_setRequestLocale(locale);

    return (
        <Flex fillWidth>
            <div
                dangerouslySetInnerHTML={{ __html: markdownHtml }}
                style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}
            />
        </Flex>
    );
}
