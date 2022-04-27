import { Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function HeroArea() {
  return (
    <Flex justifyContent={'center'} maxW={'2xl'} margin='auto'>
      <Stack spacing={2}>
        <Heading as='h2'>
          {' '}
          <Center>Hi there!!!</Center>
        </Heading>
        <Heading as='h3' color={'#38B2AC'}>
          About me
        </Heading>
        <Text margin={'auto'}>
          My name is Ranaivoson Malala (aka Ma Ranaivoson). I'm an enthusiast
          and passionate web developper specialized in JavaScript and PHP. My
          interest in web development started back in 2013 when I was in high
          school -- I've studied HTML and tried creating webpages with my phone
          (which was not smart).
        </Text>
        <Text margin={'auto'}>
          I've started learning computer science since 2019 but I don't really
          value degree (I VALUE SKILLS) for the reason that we are living in
          information era not in an industrial era anymore. I learn a lot with
          my personal research (mainly on google, udemy, and youtube) than my
          college courses. My main focus these days is learning new stuff
          everyday to sharpen my skills and getting knowledge because knowledge
          is power.
        </Text>
        <Heading as='h3' color={'#38B2AC'}>
          My skills
        </Heading>
      </Stack>
    </Flex>
  );
}

export default HeroArea;
