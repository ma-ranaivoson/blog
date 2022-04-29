import {
  Flex, Heading, Text, Box, useDisclosure, Button, Collapse,
} from '@chakra-ui/react';
import data from '../data/tech.json';
import BadgeTech from './BadgeTech';

export default function MySkills() {
  return (
    <>
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
    </>
  );
}
