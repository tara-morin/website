import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';

import { ProjectCard } from '@/components';

interface ProjectsProps {
    slug: string;
    locale: string;
}

export function Projects({ slug, locale }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', '[locale]', 'ux', 'projects', locale]);

    const project = allProjects.find(post => post.slug === slug);

    if (!project) {
        return <div>Project not found</div>; // Handle case if the project isn't found
    }
    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            {displayedProjects.map((post) => (
                <ProjectCard
                    key={post.slug}
                    href={`ux/${post.slug}`}
                    images={post.metadata.images}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
            ))}
        </Flex>
    );
}