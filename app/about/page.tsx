import {
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Span,
  Text,
  VStack,
  Box,
  HStack,
  Marquee
} from "@chakra-ui/react";

export default function About() {
  return (
    <Flex mt="2%" p={3} flexDir="column" maxWidth="1280px" mx="auto" gap={3}>
      <Text fontSize="5xl" color="rgb(7, 33, 54)">
        About
      </Text>
      <Text color="rgb(7, 33, 54)" fontSize="4xl">
        Futurescape Xchange is...
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={3}>
        <GridItem colSpan={{ base: 2 }}>
          <VStack gap={12} alignItems="flex-start">
            <Text>
              A visionary global cross-border accelerator committed to 
              accelerating progress through the fusion of intelligent technologies 
              and human-centered services. We partner with governments, businesses, 
              and communities to deliver transformative solutions that address 
              real-world challenges—at scale and across borders.
            </Text>
            <Text>
              Guided by a mission to bridge innovation with impact, we design and 
              deploy sustainable, scalable systems that uplift lives, strengthen 
              institutions, and drive inclusive growth. Our work spans sectors and 
              continents, uniting diverse stakeholders through strategic partnerships 
              that turn bold ideas into measurable outcomes.
            </Text>
            <Span></Span>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 2 }}>
          {/* <Image src="/about.jpg" /> */}git
        </GridItem>
      </SimpleGrid>

      <Text color="rgb(7, 33, 54)" fontSize="4xl">
        Event Overview
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={3}>
        <GridItem colSpan={{ base: 2 }}>
          <VStack gap={12} alignItems="flex-start">
            <Text>
              Event Name: FuturXchange Forum 2026 <br />
              Organizer: Algar Ally International <br />
              Event Type: International Business, Innovation &amp; Investment Forum <br />
              Event Dates: November 2026 (Exact dates TBD) <br />
              Location Preference: Philippines <br />
              <br />
              Delegates: 1500 <br />
              Exhibitors: 55 <br />
              Speakers/VIPs: 60-80 <br />
              Media: Local and International <br />
              <br />
              Capacity: 1500 pax (theater-style) <br />
              Size: 1800-2200 sqm <br />
              Ceiling Height: 6-8 meters <br />
              Stage: 12m W x 6m D x 1.2m H <br />
              AV & Streaming: LED wall, full PA, lighting, livestream ready <br />
              <br />
              Total Exhibitors: 55 <br />
              Standard Booth: 3m x 3m <br />
              Premium Booth: 6m x 3m <br />
              <br />
              Number of Rooms: 6 <br />
              Capacity per Room: 80-120 pax <br />
              Room Size: 100-150 sqm <br />
              <br />
              • Daily AM &amp; PM coffee breaks <br />
              • Hosted lunches (3 days) <br />
              • Day 1 Welcome Reception <br />
              • Optional Day 2 Gala Dinner <br />
              <br />
              • High-speed internet <br />
              • Power capacity for stage and exhibition <br />
              • Rigging for lighting and LED walls <br />
              • Media and livestream support <br />

            </Text>
            <Span></Span>
          </VStack>
        </GridItem>
      </SimpleGrid>
<Box height="500px" overflow="hidden" perspective="500px">
    <HStack
      gap="4"
      height="700px"
      transform="rotateX(20deg)"
      transformOrigin="center top"
    >
      <Marquee.Root side="top" flex="1" autoFill>
        <Marquee.Viewport>
          <Marquee.Content>
            <MarqueeItems images={imagesColumn1} />
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>

      <Marquee.Root side="bottom" flex="1" autoFill>
        <Marquee.Viewport>
          <Marquee.Content>
            <MarqueeItems images={imagesColumn2} />
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>

      <Marquee.Root side="top" flex="1" autoFill>
        <Marquee.Viewport>
          <Marquee.Content>
            <MarqueeItems images={imagesColumn3} />
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    </HStack>
  </Box>
    </Flex>
    
  );
}
const MarqueeItems = (props: { images: string[] }) => {
  return (
    <>
      {props.images.map((src, i) => (
        <Marquee.Item key={i} py="2">
          <Image
            src={src}
            alt={`Gallery image ${i + 1}`}
            width="full"
            height="200px"
            objectFit="cover"
            rounded="lg"
            shadow="md"
          />
        </Marquee.Item>
      ))}
    </>
  )
}

const imagesColumn1 = [
  "/techevent1.jpg",
  "https://picsum.photos/seed/img2/280/200",
  "https://picsum.photos/seed/img3/280/200",
  "https://picsum.photos/seed/img4/280/200",
]

const imagesColumn2 = [
  "https://picsum.photos/seed/img5/280/200",
  "https://picsum.photos/seed/img6/280/200",
  "https://picsum.photos/seed/img7/280/200",
  "https://picsum.photos/seed/img8/280/200",
]

const imagesColumn3 = [
  "https://picsum.photos/seed/img9/280/200",
  "https://picsum.photos/seed/img10/280/200",
  "https://picsum.photos/seed/img11/280/200",
  "https://picsum.photos/seed/img12/280/200",
]