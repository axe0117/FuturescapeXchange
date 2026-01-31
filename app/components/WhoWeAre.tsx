import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <Box
      position="relative"
      backgroundImage="url(vroom.png)"
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
          Futurescape Xchange
        </Text>

        <Flex flexDir="column" gap={4}>
          <Text fontSize="2xl" color="rgb(7, 33, 54) " fontWeight="extrabold">
            Our Mission Statement
          </Text>
          <Text maxW="600px" color="rgb(7, 33, 54) " fontWeight="extrabold">
            To accelerate sustainable global progress by introducing the best of U.S.made innovations, products, and industries to Asia empowering governments, businesses, and communities through transformative technologies, trusted consumer goods, and strategic partnerships. 
            <br /><br />By showcasing U.S. excellence in sectors such as advanced manufacturing, clean energy, digital health, agri-tech, education technology, and premium food and agricultural products, we foster a dynamic exchange that drives mutual prosperity, strengthens economic resilience, and creates enduring value for both the United States and its Asian partners.
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
              Find Out What We're Up To
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
