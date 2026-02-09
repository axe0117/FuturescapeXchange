"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Footer() {
  return (
    <Box backgroundColor="#0D1E4Abun">
      <Flex
        flexDir="column"
        maxWidth="1280px"
        px={3}
        py={10}
        mx="auto"
        gap={4}
        color="white"
      >
        <Flex justifyContent="space-between" flexWrap="wrap" gap={6}>
          <Flex flexDir="column" gap={1}>
            <Link href="/">
              <Text fontWeight="bold">FUTURESCAPE XCHANGE</Text>
            </Link>

            <Box>
              <Text>Philippines: </Text>
            </Box>
          </Flex>
          


          
          <Flex flexDir="column" gap={1} color="white">
            <Text fontWeight="bold">COMPANY</Text>
            <Link href="/about">
              <Text>About</Text>
            </Link>
            <Box>
              <Text></Text>
            </Box>

            <Box>
              <Text></Text>
            </Box>
          </Flex>
        </Flex>
        <Text>© FUTURESCAPE XCHANGE, {new Date().getFullYear()}</Text>
      </Flex>
    </Box>
  );
}
