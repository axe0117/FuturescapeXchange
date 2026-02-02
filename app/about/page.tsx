import {
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Span,
  Text,
  VStack
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
            
            <Text color="rgb(7, 33, 54)" fontSize="4xl">
              Mission Statement
            </Text>
            <Text>
              To accelerate sustainable global progress by introducing the best of U.S.made innovations,
               products, and industries to Asia empowering governments, businesses, and communities through 
               transformative technologies, trusted consumer goods, and strategic partnerships. 
               By showcasing U.S. excellence in sectors such as advanced manufacturing, clean energy, 
               digital health, agri-tech, education technology, and premium food and agricultural products, 
               we foster a dynamic exchange that drives mutual prosperity, strengthens economic resilience, 
               and creates enduring value for both the United States and its Asian partners.
            </Text>

            <Span></Span>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 2 }}>
          <Image src="/about.jpg" />
        </GridItem>

      </SimpleGrid>
    </Flex>
  );
}
