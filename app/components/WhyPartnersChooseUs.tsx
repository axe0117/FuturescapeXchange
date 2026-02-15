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
    backgroundColor="#190250"
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
      <Text fontSize="5xl" color="rgb(124, 243, 252)"
                      textShadow="0 0 14px rgba(255,255,255,0.9)">
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
                  <Icon size="2xl" width="75px" height="75px" color="rgb(124, 243, 252)" shadow="0 0 12px rgb(124, 255, 183)">
                    {reason.icon}
                  </Icon>
                  <Text textAlign="center" fontWeight="bold" fontSize="xl"
                  color="rgb(124, 243, 252)"
                      textShadow="0 0 12px rgb(124, 243, 252)">
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
