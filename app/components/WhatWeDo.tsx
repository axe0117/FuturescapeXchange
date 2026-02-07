import {
  Box,
  Card,
  Flex,
  GridItem,
  List,
  SimpleGrid,
  Text,
  Image
} from "@chakra-ui/react";

export function WhatWeDo() {
  const items = [
    {
      number: "01",
      title: "Promote U.S.-Made Innovation in Asia",
      list: [
        "Showcase high-quality American products, technologies, and solutions to meet the evolving needs of fast-growing Asian markets driving visibility, trust, and adoption across sectors."
      ]
    },
    {
      number: "02",
      title: "Forge Global Business Partnerships",
      list: [
        "Facilitate strategic alliances between American and Asian enterprises to co-create value, accelerate market entry, and foster long-term economic collaboration."
      ]
    },
    {
      number: "03",
      title: "Empower U.S. Companies to Scale Internationally",
      list: [
        "Provide U.S. businesses—especially SMEs and innovators—with the tools, insights, and networks needed to expand into high-potential international markets with confidence and cultural intelligence."
      ]
    },
    {
      number: "04",
      title: "Advance Smart, Sustainable Development",
      list: [
        "Support the growth of smart living ecosystems, sustainable urban infrastructure, modern healthcare systems, and digital transformation initiatives that improve quality of life and environmental resilience."
      ]
    },
    {
      number: "05",
      title: "Establish an Annual Innovation Bridge Summit",
      list: [
        "Launch a flagship cross-continental platform that convenes thought leaders, investors, policymakers, and entrepreneurs to exchange ideas, showcase solutions, and catalyze bilateral innovation and trade."
      ]
    }
  ];

  return (
    <Box width="100%" mx="auto" p={3} my="3%" id="solutions" >
      <Text fontSize="5xl" color="rgb(7, 33, 54)">
        Core Goals of the U.S.–Asia Innovation Bridge Initiative:
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4, lg: 4}} gap={3}>
        {items.map((content, index) => (
          <GridItem key={index}>
            <Card.Root
              borderRadius="black"
              height="100%"
              backgroundColor="rgb(12, 60, 96)"
            >
              <Card.Body p={6} gap={2}>
                <Box height="100px">
                  <Text fontSize="3xl" color="white" textShadow="0 0 12px rgba(255,255,255,1.0)">
                    {content.number}.
                  </Text>
                  <Text fontSize="xl" color="white" textShadow="0 0 12px rgba(255,255,255,1.0)">
                    {content.title}
                  </Text>
                </Box>
                <List.Root>
                  {content.list.map((item, index) => (
                    <List.Item
                      key={index}
                      ml={8}
                      fontSize="md"
                      fontWeight="bold"
                      color="white"
                      textShadow="0 0 12px rgba(255,255,255,0.6)"
                    >
                      {item}
                    </List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </SimpleGrid>
      
    </Box>

    
  );
}
