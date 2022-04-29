import {
  Box, Flex, Text, Avatar,
} from '@chakra-ui/react';

interface BadgeTechProps {
  image: string;
  name: string;
}

export default function BadgeTech({ image, name }: BadgeTechProps) {
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
