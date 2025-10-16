import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, SmartImage, Text, Button } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { web_dev } = renderContent(t);

    const title = web_dev.title;
    const description = web_dev.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/web_dev/`,
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
export default function web_dev({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const allProjects = getPosts(['src', 'app', '[locale]', 'web_dev', 'projects', locale]);

    const t = useTranslations();
    const { web_dev } = renderContent(t);

    return (
        <Flex fillWidth maxWidth="m" direction="column" gap="l">
            <Heading variant="display-strong-l">{web_dev.title}</Heading>
            <Text variant="body-default-l" style={{font: 'Lora',}}>{web_dev.description}</Text>

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
                        <Text variant="body-default-s" color="navy">
                                            {project.metadata?.summary || 'No summary available.'}
                            </Text>
                        <Button
                            style={{
                                font: 'Lora',
                            }}
                            href={`/web_dev/${project.slug}`}
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