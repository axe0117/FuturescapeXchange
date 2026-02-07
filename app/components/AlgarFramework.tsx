import { AbsoluteCenter, Card, Center, Container, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Carousel, HStack, IconButton, Box } from "@chakra-ui/react"
import {
  LuChevronLeft,
  LuChevronRight,
  LuPause,
  LuPlay,
} from "react-icons/lu"
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const items = Array.from({ length: 5 })
export function AlgarFramework() {
  return (
    <div>
    <Center>
      <Box 
        py="2%"
        justifyContent="center"
        textAlign="center"
        width="100%"
        backgroundColor="#000000"
        color="white"
      >
       <Text fontSize="5xl" color="rgb(255, 255, 255)" fontWeight="extrabold">
          2026 Content
        </Text>
        <Text fontSize="2xl" color="rgb(255, 255, 255)" fontWeight="extrabold">
          Speakers
        </Text>

    <Carousel.Root
      autoplay={{ delay: 5000 }}
      slideCount={items.length}
      mx="auto"
      maxW="x1"
      py="2%"
      spacing="48px"
      slidesPerPage={3}

    >
       
      <HStack textStyle="sm" mb="4">
      </HStack>
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box w="100%" h="300px" rounded="lg" fontSize="2.5rem">
              {index + 1}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost" color="white">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.AutoplayTrigger asChild>
          <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost" color="white">
            <Carousel.AutoplayIndicator
              paused={<LuPause />}
              play={<LuPlay />}
            />
          </IconButton>
        </Carousel.AutoplayTrigger>
        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost" color="white">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
    </Box>

    </Center>
<Box
width="100%"
bg="black"
color="white">
  <Flex justifyContent="center" py="2%" textAlign="center">
      <FaQuoteLeft size="50px" />
      </Flex>
      
      <Container textAlign="center">
        ASEAN economies are eager to adopt solutions that improve efficiency, sustainability,
         and digital readiness - creating ideal conditions for pilot programs, early deployments, and long term
          partnerships. - Dr. Vilmar Kapur
          </Container>
         
          <Flex justifyContent="center" py="2%">
          <FaQuoteRight size="50px"/>
          </Flex>
 </Box>
    <Center>
      
      <Box 
        py="2%"
        justifyContent="center"
        textAlign="center"
        width="100%"
        backgroundColor="#ffffff"
      >
       <Text fontSize="5xl" color="rgb(0, 0, 0)" fontWeight="extrabold">
          2026 Visitors
        </Text>
        <br></br>
    <Carousel.Root
      autoplay={{ delay: 5000 }}
      slideCount={items.length}
      mx="auto"
      maxW="x1"
      py="2%"
      spacing="48px"
      slidesPerPage={3}
      color="white"

    >
       
      <HStack textStyle="sm" mb="4">
      </HStack>
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box w="100%" h="300px" rounded="lg" fontSize="2.5rem">
              {index + 1}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.AutoplayTrigger asChild>
          <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost">
            <Carousel.AutoplayIndicator
              paused={<LuPause />}
              play={<LuPlay />}
            />
          </IconButton>
        </Carousel.AutoplayTrigger>
        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
    </Box>
    </Center>
    </div>
  )
}
