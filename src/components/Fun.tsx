import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import HeaderText from './HeaderText';
import YouTube from 'react-youtube';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

const Fun = ({ id }) => {
  const standoutText = useColorModeValue(
    'light.standoutText',
    'dark.standoutText'
  );

  const targetRef = useRef(null);

  const isDesktop = useBreakpointValue({ base: false, md: true });

  const [vidWidth, setVidWidth] = useState(550);

  const [shelfHeight, setShelfHeight] = useState(450);

  useEffect(() => {
    if (isDesktop) setVidWidth(550);
    else setVidWidth(300);
  }, [isDesktop]);

  const videos = ['UYQfnTmqPCI', 'tHjIUg4OYU4'];

  const [videoIndex, setVideoIndex] = useState(0);

  const funEntries = [
    // template
    // {
    //   icon: null,
    //   date: null,
    //   tldr: null,
    //   notable: null,
    //   description: null,
    //   image: null,
    //   videoLink: null,
    //   caption: null,
    //   custom: false
    // },
    {
      icon: null,
      date: 'present',
      tldr: 'random content creation ??',
      description:
        'As of December 2022 I started a YouTube channel! Still in the works but the plan is to use this to document my side quest journeys, whether it be animating progress, cool projects or life updates.',
      image: null,
      videoLink: null,
      caption: null,
      custom: true,
    },
    {
      icon: null,
      date: '2024',
      tldr: '2-handed competitive bowler',
      notable: '229 PB',
      description:
        'Back in September 2023 I decided to make the jump from being a casual bowler and joined a bowling league! Once I bought my own ball and shoes, I knew there was no going back ...',
      image: null,
      videoLink: null,
      caption: null,
      custom: false,
    },
    {
      icon: null,
      date: '2023',
      tldr: 'competitive runner',
      notable: '40:37 10km PB',
      description:
        'After running track and cross country in high school, I thought I would be done the sport forever, but last year my friend bet that he could beat me in a 10km race so of course I took him up on that >:)!',
      image: null,
      videoLink: null,
      caption:
        'It was moments like this which remind me why I quit running in the first place LOL',
      custom: false,
    },
    {
      icon: null,
      date: '2019',
      tldr: 'competitive swimmer',
      notable: '58.65 100m Backstroke (SCM)',
      description:
        'I swam competitively for 6 years to the point where I swam at Western Nationals. To this day I have no clue how I was able to wake up for 5:30am practices 🥲.',
      image: null,
      videoLink: null,
      caption: null,
      custom: false,
    },
    {
      icon: null,
      date: '2019',
      tldr: 'competitive swimmer',
      notable: '58.65 100m Backstroke (SCM)',
      description:
        'I swam competitively for 6 years to the point where I swam at Western Nationals. To this day I have no clue how I was able to wake up for 5:30am practices 🥲.',
      image: null,
      videoLink: null,
      caption: null,
      custom: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const shelfHeights = [1, 2, 3, 4];

  return (
    <Flex
      className="fade-in"
      ref={targetRef}
      flexDirection="column"
      id={id}
      mb="70px"
      height="auto"
      justifyContent="center"
      width={{ base: '330px', md: '700px', lg: '900px' }}
      alignItems="center"
      backgroundColor="blue.100"
    >
      <HeaderText text="Fun" />
      <Box
        width={{ base: '300px', md: '400px', lg: '600px' }}
        fontSize="18px"
        pb="20px"
      >
        <Text pb="12px">
          There’s more to life than just work and school so I’m a strong
          advocate for side quests in life :). From trying out new sports to
          unorthadox hobbies, here are some of my notable adventures (click
          around!)✨:
        </Text>
      </Box>
      <HStack
        bgColor="green.100"
        spacing={isDesktop && '30px'}
      >
        <VStack
          backgroundColor="#D3C6B4"
          h={`${shelfHeight}px`}
          w="330px"
          borderRadius="5px"
          outline="10px solid #6C5D46"
          mb="20px"
        >
          {shelfHeights.map((height, index) => {
            return (
              <Box
                key={index}
                pt={shelfHeight / 4.5}
                w="100%"
                borderBottom="8px solid #6C5D46"
              ></Box>
            );
          })}
        </VStack>
        {isDesktop && (
          <VStack
            backgroundColor="#D3C6B4"
            h={`${shelfHeight}px`}
            w="300px"
            borderRadius="5px"
            outline="10px solid #6C5D46"
            mb="20px"
          ></VStack>
        )}
      </HStack>
      <Box
        width="100%"
        //@ts-ignore
        textAlign="-webkit-center"
        pb="35px"
      >
        <HStack
          spacing="20px"
          justifyContent="center"
        >
          <YouTube
            videoId={videos[videoIndex]}
            opts={{
              height: '340',
              width: `${vidWidth}px`,
            }}
          />
        </HStack>
      </Box>
      <HStack
        pb="26px"
        spacing="60px"
        justifyContent="center"
      >
        <Icon
          boxSize="30px"
          as={ArrowBackIcon}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (videoIndex === 0) {
              setVideoIndex(videos.length - 1);
            } else {
              setVideoIndex(videoIndex - 1);
            }
          }}
        />
        <Icon
          boxSize="30px"
          as={ArrowForwardIcon}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            if (videoIndex === videos.length - 1) {
              setVideoIndex(0);
            } else {
              setVideoIndex(videoIndex + 1);
            }
          }}
        />
      </HStack>
      <Box
        width={{ base: '300px', md: '400px', lg: '600px' }}
        fontSize="18px"
      >
        <Text pb="12px">
          Ever since I was a child, I’ve always had a passion for drawing,
          spending countless hours drawing comics with my brother and creating
          our own (admittingly simple) worlds.
        </Text>
        <Text>
          From the theme of my website, you can probably tell I haven’t grown
          out of the doodling phase, so as of December 2022, I started a youtube
          channel to practice animating! Looking to make more fun videos in the
          future so keep checking back for updates or consider checking out my
          channel{' '}
          <Link
            isExternal
            href="https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA"
            color={standoutText}
          >
            here
          </Link>{' '}
          (or consider subscribing 👉 👈)!
        </Text>
      </Box>
    </Flex>
  );
};

export default Fun;
