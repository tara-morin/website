import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';
import { ImageCarousel } from '@/components';

interface ProjectsProps {
    slug: string; // Use slug to identify the specific project to display
    locale: string;
}

export function MLProject({ slug, locale }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', '[locale]', 'machine_learning', 'projects', locale]);

    // Find the specific project based on the slug
    const project = allProjects.find(post => post.slug === slug);

    if (!project) {
        return <div>Project not found</div>; // Handle case if the project isn't found
    }

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            <ImageCarousel
                key={project.slug}
                href={`ux/${project.slug}`}
                images={project.metadata.images}
                title={project.metadata.title}
                description={project.metadata.summary}
                content={project.content}
                avatars={project.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
        </Flex>
    );
}
