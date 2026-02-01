import {
  Box,
  Card,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
  Image
} from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import { FaBriefcase, FaCross, FaRobot, FaUserDoctor } from "react-icons/fa6";
import { RiCommunityFill, RiGovernmentLine } from "react-icons/ri";

export function WhyPartnersChooseUs() {
  const reasons = [
    { text: "Unlock Global Opportunity. Accelerate Regional Impact.", icon: <CiGlobe /> },
    {
      text: " Forge High-Value International Partnerships",
      icon: <RiGovernmentLine />,
    },
    { text: "Experience Next-Gen U.S. Innovation", icon: <FaRobot /> },
    {
      text: "Gain insights from top innovators and sector experts through immersive showcases and hands-on learning sessions.",
      icon: <FaUserDoctor />,
    },
    { text: "Expand into Asia’s Fastest-Growing Markets",
      icon: <RiCommunityFill /> },
    { text: "Attend Live Demonstrations & Masterclasses", icon: <FaBriefcase /> },
  ];

  return (
    <Box
    alignContent="center"
    backgroundColor="rgb(12, 60, 96)"
    width="100%">
    <Flex
      my="3%"
      maxWidth="1280px"
      justifyContent="space-around"
      mx="auto"
      flexWrap="wrap"
      gap={3}
      flexDir="column"
      
    >
      <Text fontSize="5xl" color="white"
                      textShadow="0 0 12px rgba(255,255,255,0.6)">
                        <br></br>
        Why Attend the U.S.–Asia Innovation Bridge Expo?
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={3}>
        {reasons.map((reason, index) => {
          return (
            <GridItem key={index}>
              <Card.Root
                height="100%"
                borderRadius="none"
                background="none"
                border="none"
              >
                <Card.Body p={3} alignItems="center">
                  <Icon size="2xl" width="75px" height="75px">
                    {reason.icon}
                  </Icon>
                  <Text textAlign="center" fontWeight="bold" fontSize="xl"
                  color="white"
                      textShadow="0 0 12px rgba(255,255,255,0.6)">
                    {reason.text}
                  </Text>
                </Card.Body>
              </Card.Root>
            </GridItem>
            
          );
          
        })}
        <br></br>
      </SimpleGrid>
    </Flex>
    </Box>
  );
}
