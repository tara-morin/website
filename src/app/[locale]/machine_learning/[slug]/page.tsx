import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getPosts } from '@/app/utils/utils'
import { Button, Flex, Heading, SmartImage, Text } from '@/once-ui/components'
import { baseURL, renderContent } from '@/app/resources';
import { routing } from '@/i18n/routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { formatDate } from '@/app/utils/formatDate';
import ScrollToHash from '@/components/ScrollToHash';
import { MLProject } from '@/components/machine_learning/MLProject';

interface WorkParams {
    params: {
        slug: string;
		locale: string;
    };
}

export async function generateStaticParams(): Promise<{ slug: string; locale: string }[]> {
	const locales = routing.locales;
    
    // Create an array to store all posts from all locales
    const allPosts: { slug: string; locale: string }[] = [];

    // Fetch posts for each locale
    for (const locale of locales) {
        const posts = getPosts(['src', 'app', '[locale]', 'machine_learning', 'projects', locale]);
        allPosts.push(...posts.map(post => ({
            slug: post.slug,
            locale: locale,
        })));
    }

    return allPosts;
}

export function generateMetadata({ params: { slug, locale } }: WorkParams) {
	let post = getPosts(['src', 'app', '[locale]', 'machine_learning', 'projects', locale]).find((post) => post.slug === slug)
	
	if (!post) {
		return
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		images,
		image,
		team,
        video_link
	} = post.metadata
	let ogImage = image
		? `https://${baseURL}${image}`
		: `https://${baseURL}/og?title=${title}`;

	return {
		title,
		description,
		images,
		team,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://${baseURL}/${locale}/machine_learning/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
        video_link,
	}
}

export default function Project(
    { params: { locale, slug } }: { params: { locale: string; slug: string } }
) {
    unstable_setRequestLocale(locale); // Use 'locale' directly
    let post = getPosts(['src', 'app', '[locale]', 'machine_learning', 'projects', locale]).find((post) => post.slug === slug); // Use 'slug' directly

    if (!post) {
        notFound();
    }

    const t = useTranslations();
    const { person, machine_learning } = renderContent(t);

    return (
        <Flex as="section"
            fillWidth maxWidth="m"
            direction="column" alignItems="center"
            gap="l">
            <Button
                    href={`/${locale}/machine_learning`} // Use 'locale' directly
                    variant="tertiary"
                    size="s"
                    prefixIcon="chevronLeft">
                    ML Projects
                </Button>
            <MLProject slug={slug} locale={locale} />
            <Flex
                fillWidth maxWidth="xs" gap="16"
                direction="column">
                <Heading
                    variant="display-strong-s">
                    {post.metadata.title}
                </Heading>
            </Flex>
            <Flex style={{ margin: 'auto' }}
                as="article"
                maxWidth="xs" fillWidth
                direction="column">
                <Flex
                    gap="12" marginBottom="24"
                    alignItems="center">
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt)}
                    </Text>
                </Flex>
                <Flex>
                    <Text>
                        Click below to watch the video summary of the project, designed for the everyday viewer:
                        </Text>
                    </Flex>
                <iframe 
                    width="560" 
                    height="315" 
                    src={post.metadata.video_link}
                    frameBorder="0" 
                    data-allow="autoplay; encrypted-media" 
                    allowFullScreen>
        </iframe>
                <CustomMDX source={post.content} />
            </Flex>
            <ScrollToHash />
        </Flex>
    );
}

