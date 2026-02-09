import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Landing() {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden"
    data-state="open"
  _open={{
    animationName: "fade-in, scale-in",
    animationDuration: "300ms",
  }}
  _closed={{
    animationName: "fade-out, scale-out",
    animationDuration: "120ms",
  }}>
    
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1"
        }}
      >
        <source src="/crowd.mp4" type="video/mp4" />
      </video>
      <Flex
        mt={{ base: "50%", md: "10%" }}
        p={3}
        flexDir="column"
        maxWidth="1280px"
        mx="auto"
        position="relative"
        zIndex={1}
        color="white"
      >
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          textShadow="0 0 20px rgba(255,255,255,2.0)"
          color="black"
        >
          Innovating Tomorrow,
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          textShadow="0 0 20px rgba(255,255,255,2.0)"
          color="black"
        >
          Connecting Nations.

        </Text>
        <Text
          fontSize={{ base: "2xl", md: "6xl" }}
          color="black"
          textShadow="0 0 20px rgba(255,255,255,2.0)"
          //like 2.6 hog
          border="none"
        >
          FUTUREXCHANGE

        </Text>
        <Text
          fontSize={{ base: "2xl", md: "6xl" }}
          color="black"
          textShadow="0 0 20px rgba(255,255,255,2.0)"
          //like 2.6 hog
          border="none"
        >
          U.S.–ASIA INNOVATION BRIDGE SUMMIT 

        </Text>

        <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
          <Link href="/slides#reg">
            <Button
              boxShadow="0 0 12px rgba(255,255,255,0.6)"
              color="rgb(12, 60, 96)"
              backgroundColor="white"
              borderRadius="none"
              fontSize="md"
              fontWeight="bold"
              size={{ base: "md", md: "lg" }}
              _hover={{
                backgroundColor: "rgb(12, 60, 96)",
                color: "white",
                transition: "0.3s"
              }}
            >
              Register to Attend
            </Button>
          </Link>

          <Link href="/slides#reg">
          <Button
            boxShadow="0 0 12px rgba(255,255,255,0.6)"
            color="rgb(12, 60, 96)"
            backgroundColor="white"
            borderRadius="none"
            fontSize="md"
            fontWeight="bold"
            size={{ base: "md", md: "lg" }}
            _hover={{
              backgroundColor: "rgb(12, 60, 96)",
              color: "white",
              transition: "0.3s"
            }}
          >
            Book a Stand
          </Button>
          </Link>

        </Flex>
      </Flex>
    </Box>
  );
}
