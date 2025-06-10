import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Team = {
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
};

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    tag?: string;
    figmaURL: string;
    team: Team[];
    video_link:string;
    colabURL: string;
    link:string;
};

function isValidURL(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

function getMDXFiles(dir: string) {
    if (!fs.existsSync(dir)) {
        throw new Error(`Directory not found: ${dir}`);
    }

    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(rawContent);

    const metadata: Metadata = {
        title: data.title || 'Untitled',
        publishedAt: data.publishedAt || new Date().toISOString(),
        summary: data.summary || 'No summary provided.',
        image: data.image || '',
        images: data.images || [],
        tag: data.tag || '',
        figmaURL: data.figmaURL || '', // Use empty string if not specified
        team: data.team || [],
        video_link: data.video_link || '',
        colabURL: data.colabURL || '',
        link: data.link || '',
    };

    return { metadata, content };
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles
        .map((file) => {
            const { metadata, content } = readMDXFile(path.join(dir, file));
            const slug = path.basename(file, path.extname(file));
            return { metadata, slug, content };
        })
        // .filter((post) => isValidURL(post.metadata.figmaURL)); // Only include posts with valid Figma URLs
}

export function getPosts(customPath = ['', '', '', '']) {
    const postsDir = path.join(process.cwd(), ...customPath);
    return getMDXData(postsDir);
}

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// type Team = {
//     name: string;
//     role: string;
//     avatar: string;
//     linkedIn: string;
// };

// type Metadata = {
//     title: string;
//     publishedAt: string;
//     summary: string;
//     image?: string;
//     images: string[];
//     tag?: string;
//     figmaURL: string;
//     team: Team[];
// };

// function getMDXFiles(dir: string) {
//     if (!fs.existsSync(dir)) {
//         throw new Error(`Directory not found: ${dir}`);
//     }

//     return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
// }

// function readMDXFile(filePath: string) {
//     if (!fs.existsSync(filePath)) {
//         throw new Error(`File not found: ${filePath}`);
//     }

//     const rawContent = fs.readFileSync(filePath, 'utf-8');
//     const { data, content } = matter(rawContent);

//     const metadata: Metadata = {
//         title: data.title || '',
//         publishedAt: data.publishedAt,
//         summary: data.summary || '',
//         image: data.image || '',
//         images: data.images || [],
//         tag: data.tag || [],
//         figmaURL: data.figmaURL || '',
//         team: data.team || [],
//     };

//     return { metadata, content };
// }

// function getMDXData(dir: string) {
//     const mdxFiles = getMDXFiles(dir);
//     return mdxFiles.map((file) => {
//         const { metadata, content } = readMDXFile(path.join(dir, file));
//         const slug = path.basename(file, path.extname(file));

//         return {
//             metadata,
//             slug,
//             content,
//         };
//     });
// }

// export function getPosts(customPath = ['', '', '', '']) {
//     const postsDir = path.join(process.cwd(), ...customPath);
//     return getMDXData(postsDir);
// }