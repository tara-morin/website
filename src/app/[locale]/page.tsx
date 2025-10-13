import React from 'react';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Arrow, ColorInput, Avatar, Button, Flex, Heading, Icon, Grid, SmartImage, Tag, Text,RevealFx } from '@/once-ui/components';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const {person, home, social } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/home`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
	};
}

export default function Home(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const {person, home, social } = renderContent(t);
    const structure = [
        { 
            title: home.intro.title,
            display: home.intro.display,
            items: []
        },
        { 
            title: home.studies.title,
            display: home.studies.display,
            items: [home.studies.institutions.map(institution => institution.name),home.studies.courses.map(course=>course.name)]
        },
        { 
            title: home.technical.title,
            display: home.technical.display,
            items: home.technical.skills.map(skill => skill.title)
        },
    ]
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: home.intro.description,
                        url: `https://${baseURL}/home`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                    }),
                }}
            />
            {/* { home.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents
                        structure={structure}
                        home={home} />
                </Flex>
            )} */}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                { home.avatar.display && (
                    <Flex
                        className={styles.avatar}
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src={person.avatar}
                            size="xl"/>
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe"/>
                            {person.location}
                        </Flex>
                        { person.languages.length > 0 && (
                            <Flex
                                wrap
                                gap="8">
                                {person.languages.map((language, index) => (
                                    <Tag
                                        key={index}
                                        size="l">
                                        {language}
                                    </Tag>
                                ))}
                            </Flex>
                        )}
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">
                    <Flex
                        id={home.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        <Heading
                            className={styles.textAlign}
                            variant="display-strong-xl">
                            {person.name}
                        </Heading>
                        <Text
                            className={styles.textAlign}
                            variant="display-default-xs"
                            onBackground="neutral-weak">
                            {person.role}
                        </Text>
                        {social.length > 0 && (
                            <Flex
                                className={styles.blockAlign}
                                paddingTop="20" paddingBottom="8" gap="8" wrap>
                                {social.map((item) => (
                                    item.link && (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="tertiary"/>
                                    )
                                ))}
                            </Flex>
                        )}
                    </Flex>

                    { home.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            {home.intro.description}
                        </Flex>
                    )}

                    { home.studies.display && (
                        <>
                            <Heading
                                as="h2"
                                id={home.studies.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {home.studies.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {home.studies.institutions.map((institution, index) => (
                                    <Flex
                                        key={`${institution.name}-${index}`}
                                        fillWidth gap="4"
                                        direction="column">
                                        <Text
                                            id={institution.name}
                                            variant="heading-strong-l">
                                            {institution.name}
                                        </Text>
                                        <Text
                                            variant="heading-default-xs"
                                            onBackground="neutral-weak">
                                            {institution.description}
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                            <Heading color='#12007d' variant="display-strong-xs">
                                My coursework at UVA includes:
                            </Heading>
                            <RevealFx speed="slow" delay={1}>
                            <Flex direction="row" gap="24" padding="12" justifyContent="space-between">
                            {Array.from({ length: 3 }).map((_, colIndex) => (
                                <Flex
                                    key={`column-${colIndex}`}
                                    direction="column"
                                    gap="16"
                                    style={{ flex: 1 }}
                                >
                                    {home.studies.courses
                                        .filter((_, courseIndex) => courseIndex % 3 === colIndex) // Distribute courses across columns
                                        .map((course, index) => (
                                            <Flex
                                                key={`${course.name}-${index}`}
                                                padding="8"
                                                border="neutral-medium"
                                                radius="m"
                                                style={{ textAlign: "center" }}
                                            >
                                                <Text id={course.name} color='#12007d'>
                                                    {course.name}
                                                    </Text>
                                            </Flex>
                                        ))}
                                </Flex>
                            ))}
                        </Flex>
                        </RevealFx>
                        </>
                    )}
                    <RevealFx speed="slow" delay={3}>
                    <Flex gap="24" direction="column">
                    <Text>
                        I began my college journey with the intention to become a clinical psychologist. At the beginning of my 2nd year, I took my first coding class, and unexpectedly found my new passion. I have since done the planning and classwork to not only add the major of Computer Science, but keep the major of Cognitive Science. 
                        </Text>
                    <Text>
                        In my free time, I enjoy singing in choirs, taking ballet classes, and practicing the piano.
                    </Text>
                    </Flex>
                    </RevealFx>
                </Flex>
            </Flex>
        </Flex>
    );
}
