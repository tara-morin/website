import { Avatar, Button, Flex, Heading, Icon, Grid, SmartImage, Tag, Text,RevealFx } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    // {params: {locale}}: { params: { locale: string }}
) {
    // const t = await getTranslations();
    // const {person, about, social } = renderContent(t);
	// const title = about.title;
	// const description = about.description;
	// const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		// title,
		// description,
		// openGraph: {
		// 	title,
		// 	description,
		// 	type: 'website',
		// 	url: `https://${baseURL}/${locale}/about`,
		// 	images: [
		// 		{
		// 			url: ogImage,
		// 			alt: title,
		// 		},
		// 	],
		// },
	};
}

export default function About(
    // { params: {locale}}: { params: { locale: string }}
) {
    // unstable_setRequestLocale(locale);
    // const t = useTranslations();
    // const {person, about, social } = renderContent(t);
    // const structure = [
    //     { 
    //         title: about.intro.title,
    //         display: about.intro.display,
    //         items: []
    //     },
    //     { 
    //         title: about.studies.title,
    //         display: about.studies.display,
    //         items: [about.studies.institutions.map(institution => institution.name),about.studies.courses.map(course=>course.name)]
    //     },
    //     { 
    //         title: about.technical.title,
    //         display: about.technical.display,
    //         items: about.technical.skills.map(skill => skill.title)
    //     },
    // ]
    return (
        <Flex>

        </Flex>
    );
}