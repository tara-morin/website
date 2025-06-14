"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'

import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";
import { i18n } from "@/app/resources/config";


export const Header = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname() ?? '';
    const params = useParams();

    function handleLanguageChange(locale: string) {
        const nextLocale = locale as Locale;
        startTransition(() => {
            router.replace(
                pathname,
                {locale: nextLocale}
            )
        })
    }

    const t = useTranslations();
    const { person, home, about, machine_learning, ux, web_dev, resume } = renderContent(t);

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={9}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>
            <Flex style={{height: 'fit-content'}}
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    { display.location && (
                        <Flex hide="s">
                            {person.location}
                        </Flex>
                    )}
                </Flex>
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                        padding="4"
                        justifyContent="center">
                        <Flex
                            gap="4"
                            textVariant="body-default-s">
                            { routes['/'] && (
                                <ToggleButton
                                    prefixIcon="home"
                                    href={`/${params?.locale}`}
                                    selected={pathname === "/"}>
                                    <Flex paddingX="2" hide="s">{home.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/about'] && (
                                <ToggleButton
                                    prefixIcon="person"
                                    href={`/${params?.locale}/about`}
                                    selected={pathname === "/about"}>
                                    <Flex paddingX="2" hide="s">{about.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/ux'] && (
                                <ToggleButton
                                    prefixIcon="lightbulb"
                                    href={`/${params?.locale}/ux`}
                                    selected={pathname.startsWith('/ux')}>
                                    <Flex paddingX="2" hide="s">{ux.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/machine_learning'] && (
                                <ToggleButton
                                    prefixIcon="gears"
                                    href={`/${params?.locale}/machine_learning`}
                                    selected={pathname.startsWith('/machine_learning')}>
                                    <Flex paddingX="2" hide="s">{machine_learning.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/web_dev'] && (
                                <ToggleButton
                                    prefixIcon="globe"
                                    href={`/${params?.locale}/web_dev`}
                                    selected={pathname.startsWith('/web_dev')}>
                                    <Flex paddingX="2" hide="s">{web_dev.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/resume'] && (
                                <ToggleButton
                                    prefixIcon="resume"
                                    href={`/${params?.locale}/resume`}
                                    selected={pathname.startsWith('/resume')}>
                                    <Flex paddingX="2" hide="s">{resume.label}</Flex>
                                </ToggleButton>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                        {routing.locales.length > 1 &&
                            <Flex
                                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                                padding="4" gap="2"
                                justifyContent="center">
                                {i18n && routing.locales.map((locale, index) => (
                                    <ToggleButton
                                        key={index}
                                        selected={params?.locale === locale}
                                        onClick={() => handleLanguageChange(locale)}
                                        className={isPending && 'pointer-events-none opacity-60' || ''}
                                        >
                                        {locale.toUpperCase()}
                                    </ToggleButton>
                                ))}
                            </Flex>
                        }
                        {/* <Flex hide="s">
                            { display.time && (
                                <TimeDisplay timeZone={person.location}/>
                            )}
                        </Flex> */}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}