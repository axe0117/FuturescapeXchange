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
      title: "Title",
      list: [
        "content"
      ]
    }
  ];

  return (
    <Box maxWidth="1280px" mx="auto" p={3} my="3%" id="solutions">
      <Text fontSize="5xl" color="rgb(7, 33, 54)">
        Our commitment to Vision 2030 is lucid, with FutureScape US-ASEAN is committed to:
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4, lg: 4}} gap={3}>
        {items.map((content, index) => (
          <GridItem key={index}>
            <Card.Root
              borderRadius="none"
              height="100%"
              backgroundColor="rgb(12, 60, 96)"
            >
              <Card.Body p={3} gap={2}>
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
