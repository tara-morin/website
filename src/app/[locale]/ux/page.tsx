import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, SmartImage, Text, Button } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { ux } = renderContent(t);

    const title = ux.title;
    const description = ux.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/ux/`,
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
export default function UX({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const allProjects = getPosts(['src', 'app', '[locale]', 'ux', 'projects', locale]);

    const t = useTranslations();
    const { ux } = renderContent(t);

    return (
        <Flex fillWidth maxWidth="m" direction="column" gap="l">
            <Heading variant="display-strong-l">{ux.title}</Heading>
            <Text variant="body-default-l" style={{font: 'Lora',}}>{ux.description}</Text>

            {allProjects.map((project) => {
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
                            {project.metadata.title}
                        </Heading>
                        <SmartImage
                            aspectRatio="16 / 9"
                            radius="m"
                            alt={project.metadata.title}
                            src={projectImage}
                        />
                        <Text variant="body-default-s" color="white">
                            {project.metadata.summary}
                        </Text>
                        <Button
                            style={{
                                backgroundColor: '#12007d',
                                color: '#FFFFFF',
                                font: 'Lora',
                            }}
                            href={`/ux/${project.slug}`}
                            variant="primary"
                            suffixIcon="chevronRight"
                        >
                            Read More
                        </Button>
                    </Flex>
                );
            })}
        </Flex>
    );
}
