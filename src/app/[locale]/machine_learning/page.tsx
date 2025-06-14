import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, SmartImage, Text, Button } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { machine_learning } = renderContent(t);

    const title = machine_learning.title;
    const description = machine_learning.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/machine_learning/`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}
export default function machine_learning({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const allProjects = getPosts(['src', 'app', '[locale]', 'machine_learning', 'projects', locale]);

    const t = useTranslations();
    const { machine_learning } = renderContent(t);

    return (
        <Flex fillWidth maxWidth="m" direction="column" gap="l">
            <Heading variant="display-strong-l">{machine_learning.title}</Heading>
            <Text variant="body-default-l" style={{font: 'Lora',}}>{machine_learning.description}</Text>

            {allProjects.length > 0 ? (
    allProjects.map((project) => {
        const projectImage = `/images/projects/project-01/${project.slug}.png`; // Image from the images folder

        return (
            <Flex
                key={project.slug}
                as="article"
                direction="column"
                gap="m"
                padding="m"
                border="brand-medium"
            >
                <Heading variant="display-default-m">
                    {project.metadata?.title || 'Untitled Project'}
                </Heading>
                <SmartImage
                    aspectRatio="16 / 9"
                    radius="m"
                    alt={project.metadata?.title || 'Untitled Project'}
                    src={projectImage}
                />
                <Text variant="body-default-s" color="navy">
                    {project.metadata?.summary || 'No summary available.'}
                </Text>
                <Button
                    style={{
                        font: 'Lora',
                    }}
                    href={`/machine_learning/${project.slug}`}
                    variant="primary"
                    suffixIcon="chevronRight"
                >
                    Read More
                </Button>
            </Flex>
        );
    })
) : (
    <Text>No projects found for locale: {locale}.</Text>
)}

        </Flex>
    );
}