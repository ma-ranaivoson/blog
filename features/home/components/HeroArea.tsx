import {
  Center, Flex, Heading, Stack, Text, Avatar, Box, useDisclosure, Button, Collapse,
} from '@chakra-ui/react';
import data from '../data/tech.json';

interface BadgeTechProps {
  image: string;
  name: string;
}

function BadgeTech({ image, name }: BadgeTechProps) {
  return (
    <Flex alignContent="center" alignItems="center" mt="5">
      <Avatar src={image} bgColor="#fff" />
      <Box ml="3">
        <Text fontWeight="bold">
          {name}
        </Text>
      </Box>
    </Flex>
  );
}

function HeroArea() {
  return (
    <Flex justifyContent="center" maxW="2xl" margin="auto">
      <Stack spacing={2}>
        <Heading as="h2">
          {' '}
          <Center>Hi there!!!</Center>
        </Heading>
        <Heading as="h3" color="#38B2AC">
          About me
        </Heading>
        <Text margin="auto">
          My name is Ranaivoson Malala (aka Ma Ranaivoson). I&apos;m an
          enthusiast and passionate web developper specialized in JavaScript and
          PHP. My interest in web development started back in 2013 when I was in
          high school -- I&apos;ve studied HTML and tried creating webpages with
          my phone (which was not smart).
        </Text>
        <Text margin="auto">
          I&apos;ve started learning computer science since 2019 but I
          don&apos;t really value degree (I VALUE SKILLS) for the reason that we
          are living in information era not in an industrial era anymore. I
          learn a lot with my personal research (mainly on google, udemy, and
          youtube) than my college courses. My main focus these days is learning
          new stuff everyday to sharpen my skills and getting knowledge because
          knowledge is power.
        </Text>
        <Heading as="h3" color="#38B2AC">
          My skills
        </Heading>
        <Text margin="auto">
          I&apos;ve been recently working with:
        </Text>
        <Flex flexDir={{ base: 'column', md: 'row' }} w="100%" flexWrap="wrap">
          {data.type.map((type, i) => {
            const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Box w={{ base: '100%', md: '50%' }} p="1" key={`${type.length}-${i + 100}`}>
                <Button onClick={onToggle} w="100%">{type}</Button>
                <Collapse in={isOpen} animateOpacity>
                  { data.recent
                    .filter((filteredData) => filteredData.type === type)
                    .map((d) => <BadgeTech name={d.name} image={d.image} key={`${d.name}+${d.image}`} />)}
                </Collapse>
              </Box>
            );
          })}
        </Flex>
        <Text margin="auto">
          Also proficient in:
        </Text>
        <Flex flexDir={{ base: 'column', md: 'row' }} w="100%" flexWrap="wrap">
          {data.type.filter((elem) => elem !== 'Devops').map((type, i) => {
            const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Box w={{ base: '100%', md: '50%' }} p="1" key={`${type.length}-${i + 100}`}>
                <Button onClick={onToggle} w="100%">{type}</Button>
                <Collapse in={isOpen} animateOpacity>
                  { data.skills
                    .filter((filteredData) => filteredData.type === type)
                    .map((d) => <BadgeTech name={d.name} image={d.image} key={`${d.name}+${d.image}`} />)}
                </Collapse>
              </Box>
            );
          })}
        </Flex>
      </Stack>
    </Flex>
  );
}

export default HeroArea;
