import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/resume/MasonryGrid";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {

	const t = await getTranslations();
	const { resume } = renderContent(t);

	const title = resume.title;
	const description = resume.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/resume`,
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

export default function Resume(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { resume, person } = renderContent(t);
    return (
        <Flex fillWidth>
            <script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ImageGallery',
						name: resume.title,
						description: resume.description,
						url: `https://${baseURL}/resume`,
						image: gallery.images.map((image) => ({
                            '@type': 'ImageObject',
                            url: `${baseURL}${image.src}`,
                            description: image.alt,
                        })),
						author: {
							'@type': 'Person',
							name: person.name,
                            image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
            <MasonryGrid/>
        </Flex>
    );
}