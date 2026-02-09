import { Center, Container, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Icon, Carousel, HStack, IconButton, Box, Stack, Image, Badge, Span} from "@chakra-ui/react"
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
      maxW="2x1"
      py="2%"
      position="relative"
      gap="4"
      slidesPerPage={5}
    >
       
      <HStack textStyle="sm" mb="4">
      </HStack>
      <Carousel.ItemGroup>
        {speakers.map((speaker, index) => (
          <Carousel.Item key={speaker.id} index={index}>
            <SpeakerCard data={speaker} />
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
        Quote of all time
          </Container>
         
          <Flex justifyContent="center" py="2%">
          <FaQuoteRight size="50px"/>
          </Flex>
 </Box>
 {/*----------------------------------------------------------------------------- VISITORS------------------------------------------------------------*/}
    <Center>
<Box 
        py="2%"
        justifyContent="center"
        textAlign="center"
        width="100%"
        backgroundColor="#ffffff"
        color="white"
      >
       <Text fontSize="5xl" color="rgb(0, 0, 0)" fontWeight="extrabold">
          2026 Visitors
        </Text>


    <Carousel.Root
      autoplay={{ delay: 5000 }}
      slideCount={items.length}
      mx="auto"
      maxW="2x1"
      py="2%"
      position="relative"
      gap="4"
      slidesPerPage={5}
    >
       
      <HStack textStyle="sm" mb="4">
      </HStack>
      <Carousel.ItemGroup>
        {visitors.map((visitor, index) => (
          <Carousel.Item key={visitor.id} index={index}>
            <VisitorCard data={visitor} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

     <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost" color="black">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.AutoplayTrigger asChild>
          <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost" color="black">
            <Carousel.AutoplayIndicator
              paused={<LuPause />}
              play={<LuPlay />}
            />
          </IconButton>
        </Carousel.AutoplayTrigger>
        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost" color="black">
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

//////////SPEAKER STUFF
interface SpeakerCardProps {
  data: Speaker
}

const SpeakerCard = ({ data }: SpeakerCardProps) => (
  <Stack gap="3">
    <Box position="relative" justifyItems="center">
      <Image
        src={data.image}
        alt={data.title}
        rounded="l2"
        w="250px"
        h="250px"
        objectFit="cover"
        draggable={false}
      />

    </Box>
    <Stack gap="1">
      <Span fontWeight="semibold" textStyle="sm">
        {data.title}
      </Span>
      <Span  textStyle="xs">{data.desc}</Span>
    </Stack>
  </Stack>
)

interface Speaker {
  id: number
  title: string
  image: string
  desc: string
}

const speakers: Speaker[] = [
  {
    id: 1,
    title: "Deepak Chopra",
    image: "/deepak.jpg",
    desc: "Author"
  },
  
  {
    id: 2,
    title: "Jim Himmes",
    image: "/himmes.jfif",
    desc: "Source Global CEO"
  },
  {
    id: 3,
    title: "Leonardo DiCaprio",
    image: "leo.jpg",
    desc: "Actor and Producer"
  },
  {
    id: 4,
    title: "Eric Trump",
    image: "eric.jfif",
    desc: "American Businessman"
  },
  {
    id: 5,
    title: "Elon Musk",
    image: "elon.jpg",
    desc: "Tesla and SpaceX CEO"
  },
]


/////////// VISITOR STUFF

interface VisitorCardProps {
  data: Visitor
}

const VisitorCard = ({ data }: VisitorCardProps) => (
  <Stack gap="3">
    <Box position="relative" justifyItems="center">
      <Image
        src={data.image}
        alt={data.title}
        rounded="l2"
        w="250px"
        h="250px"
        objectFit="contain"
        draggable={false}
      />

    </Box>
    <Stack gap="1">
      <Span color="black" fontWeight="semibold" textStyle="sm">
        {data.title}
      </Span>
    </Stack>
  </Stack>
)

interface Visitor {
  id: number
  title: string
  image: string
}

const visitors: Visitor[] = [
  {
    id: 1,
    title: "Medtronic",
    image: "/medtronic.jpg",
  },
  
  {
    id: 2,
    title: "J&J Medtech",
    image: "/jjmedtech.jpg",
  },
  {
    id: 3,
    title: "Siemens",
    image: "siemens.png",
  },
  {
    id: 4,
    title: "Medline Distributor",
    image: "medline.png",
  },
  {
    id: 5,
    title: "Stryker",
    image: "stryker.png",
  },
    {
    id: 6,
    title: "BD",
    image: "BD.jpg",
  },
    {
    id: 7,
    title: "GE Healthcare",
    image: "gehealthcare.png",
  },
    {
    id: 8,
    title: "Philips",
    image: "philips.jpg",
  },
    {
    id: 9,
    title: "Abbott",
    image: "abbott.jpg",
  },
    {
    id: 10,
    title: "Roche Diagnostics",
    image: "roche.png",
  },
    {
    id: 11,
    title: "Boston Scientific",
    image: "boston.png",
  },
  {
    id: 12,
    title: "Cardinal Health",
    image: "cardinal.jpg",
  },
  {
    id: 13,
    title: "B Braun Medical Supplies",
    image: "bbraun.png",
  },
  {
    id: 14,
    title: "Lifeline Diagnostic",
    image: "lifeline.png",
  },
  {
    id: 15,
    title: "Transmedic Philippines",
    image: "transmedic.png",
  },
  {
    id: 16,
    title: "Equilife Medical Equipment",
    image: "equilife.jfif",
  },
  {
    id: 17,
    title: "IDS Medical Systems",
    image: "ids.jfif",
  },
  {
    id: 18,
    title: "AAMI",
    image: "aami.png",
  },

]