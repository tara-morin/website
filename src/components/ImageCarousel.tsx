"use client";

import { AvatarGroup, Flex, Heading, RevealFx, SmartImage, SmartLink, Text } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

interface ImageProps {
    href: string;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
}

export const ImageCarousel: React.FC<ImageProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const t = useTranslations();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        if(images.length > 1) {
            setIsTransitioning(false);
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);

        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(true);
            }, 630);
        }
    };

    return (
        <Flex
            fillWidth gap="m"
            direction="column"
            // minWidth={20}
            // maxWidth={50}
            // minHeight={30}
            // maxHeight={60}
            // alignItems="start"
            // justifyContent="center"
            >
            {images[activeIndex] && <Flex onClick={handleImageClick}>
                <RevealFx
                    style={{width: '100%'}}
                    delay={0.4}
                    trigger={isTransitioning}
                    speed="fast">
                    <SmartImage
                        tabIndex={0}
                        radius="l"
                        alt={title}
                        objectFit="contain"
                        src={images[activeIndex]}
                        style={{
                            border: '1px solid var(--neutral-alpha-weak)',
                            ...(images.length > 1 && {
                                cursor: 'pointer',
                            }),
                            minWidth:50,
                            maxWidth:200,
                            minHeight:400,
                            maxHeight:900,
                        }}/>
                </RevealFx>
            </Flex>}
            {images.length > 1 && (
                <Flex
                    gap="4" paddingX="s"
                    fillWidth
                    justifyContent="center">
                    {images.map((_, index) => (
                        <Flex
                            key={index}
                            onClick={() => handleControlClick(index)}
                            style={{
                                background: activeIndex === index 
                                    ? 'var(--neutral-on-background-strong)' 
                                    : 'var(--neutral-alpha-medium)',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                            }}
                            fillWidth
                            height="2">
                        </Flex>
                    ))}
                </Flex>
            )}
            
        </Flex>
    );
};
