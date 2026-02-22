import { Box, Button, Flex, Text, AspectRatio } from "@chakra-ui/react";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <Box
      position="relative"
      // backgroundImage="url(vroom.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      py="10%"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(216, 232, 242, 0.6)",
        zIndex: 0
      }}
    >
      <Flex
        alignItems="center"
        flexWrap="wrap"
        maxWidth="1280px"
        mx="auto"
        flexDir="row"
        position="relative"
        justifyContent="space-between"
        zIndex={1}
        px={3}
      >
        <Text fontSize="5xl" color="rgb(7, 33, 54)" fontWeight="extrabold">
          Welcome to <br></br>
          FutureXchange Summit
        </Text>

        <Flex flexDir="column" gap={4}>
          <Text maxW="600px" color="rgb(7, 33, 54) " fontWeight="extrabold">
            This event brings together global innovators, industry leaders, and government decision makers shaping the future of Asia's rapidly expanding economies.
            More than just an exhibition, this premier B2B event is a tranformative movement dedicateed to accelerate technological innovation in several sectors.
            <br></br><br></br>
            Asia remains the world's fastest growing economic region
            , driven by large-scale digital transformation, infrastructure modernization, healthcare expansion, and launching demand
            for advanced automations.
          </Text>

          <Link href="/about">
            <Button
              w="full"
              variant="ghost"
              background="none"
              border="1px solid rgb(12, 60, 96)"
              borderRadius="none"
              size="lg"
              color="rgb(12, 60, 96)"
              fontWeight="bold"
              _hover={{ backgroundColor: "rgb(12, 60, 96)", color: "white" }}
            >
              Learn More
            </Button>
          </Link>
          <Link href="/slides">
            <Button
              w="full"
              variant="ghost"
              background="none"
              border="1px solid rgb(12, 60, 96)"
              borderRadius="none"
              size="lg"
              color="rgb(12, 60, 96)"
              fontWeight="bold"
              _hover={{ backgroundColor: "rgb(12, 60, 96)", color: "white" }}
            >
              Become an Exhibitor
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        maxWidth="1280px"
        mx="auto"
        flexDir="row"
        position="relative"
        justifyContent="center"
        zIndex={1}
        my="2%"
      >

         <iframe width="560" height="315" title="panel"
        src="https://www.youtube.com/embed/s4xbURWyuAs?si=uy7-WKk8OwIl-qJp"
        allowFullScreen></iframe> 

        <iframe width="560" height="315" title="bioprint"
        src="https://www.youtube.com/embed/b_zoFvtf5AA?si=6961NDa-KFLkG02N"
        allowFullScreen></iframe> 

        <iframe width="560" height="315" title="medtronic"
        src="https://www.youtube.com/embed/5PfG_I4Yv8g?si=yn3bA4H79CufLX0c"
        allowFullScreen></iframe> 

        <iframe width="560" height="315" title="davinci"
        src="https://www.youtube.com/embed/QksAVT0YMEo?si=LS-DiWHr80gt595p"
        allowFullScreen></iframe> 

        <iframe width="560" height="315" title="photonic"
        src="https://www.youtube.com/embed/Fw9qzVFwE8c?si=sqCUksoMiQWi916M"
        allowFullScreen></iframe> 

      </Flex>
    </Box>

  );
}
