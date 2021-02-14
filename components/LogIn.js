import Head from "next/head";
import { signIn } from "next-auth/client";

import {
  Box,
  Text,
  Flex,
  Heading,
  Stack,
  Center,
  Square,
  Button,
} from "@chakra-ui/react";

import Header from "./Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Stack direction={["column", "row"]} spacing="0px" bg="#FFEBEE">
        <Box w="100%" h="85vh">
          <Center w="100%" h="100%">
            <Stack spacing={14} w="80%">
              <Box>
                <Heading
                  size="3xl"
                  color=" #800080"
                  style={{ fontFamily: "monospace", marginBottom: "25px" }}
                >
                  GithubAuth
                </Heading>
                <Text
                  fontSize="2xl"
                  color="#993299"
                  style={{ fontFamily: "monospace" }}
                >
                  Sign In with Github and the session will be saved on database
                </Text>
              </Box>
              <Box>
                <Button
                  bg="#800080"
                  color="white"
                  colorScheme="blue"
                  w="100px"
                  onClick={() => signIn("github")}
                >
                  SignIn
                </Button>
              </Box>
            </Stack>
          </Center>
        </Box>
        <Box
          w="70%"
          h="85vh"
          d={{
            base: "none", // 0-48em
            md: "block",
          }}
        >
          <Flex color="white" align="center" justify="flex-start" h="100%">
            <Square size="80%" color="white">
              <img src="av.svg" alt="none" />{" "}
            </Square>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
