import {
  Flex,
  Image,
  Text,
  Button,
  Link,
  Box,
  Stack,
  Heading,
  Center,
  VStack,
  StackSeparator,
  Card,
  HStack
} from "@chakra-ui/react";

export default function Slides() {
  return (
    <Flex p={3} flexDir="column">
      <Center>
        <Text fontSize="5xl" color="rgb(7, 33, 54)">
          Slides
        </Text>
      </Center>

      <VStack align="center" separator={<StackSeparator />}>
        <Box h="500">
          <Card.Root flexDirection="row" overflow="hidden" minW="xl" maxW="xl">
            <Image
              objectFit="cover"
              maxW="200px"
              src="/Slide1.PNG"
              alt="Caffe Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">FutureXchange</Card.Title>
                <Card.Description>
                  Learn more about our mission, event flow, and featured topics
                  by looking through our promotional presentation!
                </Card.Description>
              </Card.Body>
              <Card.Footer>
                <Link href="/summitslides">
                  <Button>View</Button>
                </Link>
              </Card.Footer>
            </Box>
          </Card.Root>
        </Box>
        <Box h="500">
          <Card.Root flexDirection="row" overflow="hidden" minW="xl" maxW="xl">
            <Image objectFit="cover" maxW="200px" src="/question.png" />
            <Box>
              <Card.Body>
                <Card.Title mb="2">Coming Soon!</Card.Title>
                <Card.Description>More slides are on the way!</Card.Description>
              </Card.Body>
              <Card.Footer>
                <Button cursor="disabled" variant="plain">
                  Unavailable
                </Button>
              </Card.Footer>
            </Box>
          </Card.Root>
        </Box>
      </VStack>
    </Flex>
  );
}
