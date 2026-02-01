import { Card, Center, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Carousel, HStack, IconButton, Box } from "@chakra-ui/react"
import {
  LuChevronLeft,
  LuChevronRight,
  LuPause,
  LuPlay,
} from "react-icons/lu"

const items = Array.from({ length: 5 })
export function AlgarFramework() {
  return (
    <div>
    <Center>
      <Box 
        py="5%"
        justifyContent="center"
      >
       <Text fontSize="5xl" color="rgb(7, 33, 54)" fontWeight="extrabold">
          2026 Content
        </Text>
        <Text fontSize="2xl" color="rgb(7, 33, 54)" fontWeight="extrabold">
          Speakers
        </Text>
        <br></br>
    <Carousel.Root
      autoplay={{ delay: 5000 }}
      slideCount={items.length}
      mx="auto"
      maxW="x1"
      py="5%"
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

    <Center>
      <Box 
        py="5%"
        justifyContent="center"
      >
       <Text fontSize="5xl" color="rgb(7, 33, 54)" fontWeight="extrabold">
          2026 Visitors
        </Text>
        <br></br>
    <Carousel.Root
      autoplay={{ delay: 5000 }}
      slideCount={items.length}
      mx="auto"
      maxW="x1"
      py="5%"
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
