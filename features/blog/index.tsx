import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop: SpaceProps['marginTop'];
}

// eslint-disable-next-line react/function-component-definition
const BlogTags: React.FC<IBlogTags> = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <HStack spacing={2} marginTop={props.marginTop}>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.tags.map((tag) => (
      <Tag size="md" variant="solid" colorScheme="blue" key={tag}>
        {tag}
      </Tag>
    ))}
  </HStack>
);

interface BlogAuthorProps {
  date: Date;
  name: string;
}

// eslint-disable-next-line react/function-component-definition
export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => (
  <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
    <Image
      borderRadius="full"
      boxSize="40px"
      src="https://100k-faces.glitch.me/random-image"
      // eslint-disable-next-line react/destructuring-assignment
      alt={`Avatar of ${props.name}`}
    />
    {/* eslint-disable-next-line react/destructuring-assignment */}
    <Text fontWeight="medium">{props.name}</Text>
    <Text>—</Text>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    <Text>{props.date.toLocaleDateString()}</Text>
  </HStack>
);

function BlogPage() {
  return (
    <Container maxW="7xl" p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <BlogTags tags={['Engineering', 'Product']} marginTop={undefined} />
          <Heading marginTop="1">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Blog article title
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
    </Container>
  );
}

export default BlogPage;
