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
  Marquee,
  AspectRatio,
  Button,
  Link
} from "@chakra-ui/react";

export default function About() {
  return (
    <Flex mt="2%" p={3} flexDir="column" maxWidth="1280px" mx="auto" gap={3}>
      <Text fontSize="5xl" color="rgb(7, 33, 54)">
        About
      </Text>
      
      <Text color="rgb(7, 33, 54)" fontSize="4xl">
        FutureXchange is...
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
          <AspectRatio ratio={16 / 9}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.400312506141!2d121.01678307544971!3d14.519079979066682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cecce8891457%3A0x9ecf90c1c82a60c5!2sNewport%20World%20Resorts!5e0!3m2!1sen!2sus!4v1771127682207!5m2!1sen!2sus" />
    </AspectRatio>
        </GridItem>
      </SimpleGrid>

      <Text color="rgb(7, 33, 54)" fontSize="4xl">
        Event Overview
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={3}>
        <GridItem colSpan={{ base: 2 }}>
          <VStack gap={12} alignItems="flex-start">
            <Text>
              Event Name: FutureXchange Forum 2026 <br />
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

 {/* <a href="/FX_Event_Breakdown.pdf" download="FX_Event_Breakdown"> */}
 <Link href="/FX_Event_Breakdown.pdf" download="FX_Event_Breakdown">
 <Button variant="outline">Download Full Event Breakdown PDF (1.57 MB) </Button>
</Link>

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
  "/techevent2.jpg",
  "/techevent3.jpg",
  "/techevent4.jpg",
]

const imagesColumn2 = [
   "/techevent5.jpg",
   "/techevent6.jpg",
   "/techevent7.jpg",
   "/techevent8.jpg",
]

const imagesColumn3 = [
  "/techevent9.jpeg",
  "/techevent10.jpg",
  "/techevent6.jpg",
  "/techevent7.jpg",
]