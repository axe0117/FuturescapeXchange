"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Footer() {
  return (
    <Box backgroundColor="#020f27">
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
              <Text fontWeight="bold">FUTUREXCHANGE SUMMIT</Text>
            </Link>

            <Box>
              November 7-9, 2026 <br />
              New Port World Resort, Metro Manila, Philippines <br />
              inquiry@futurexchangesummit.com <br />
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
        <Text>© FUTUREXCHANGE SUMMIT, {new Date().getFullYear()}</Text>
      </Flex>
    </Box>
  );
}
