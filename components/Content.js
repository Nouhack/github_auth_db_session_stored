import { signOut, useSession } from "next-auth/client";
import Head from "next/head";

import { Box, Text, Heading, Stack, Center, Button } from "@chakra-ui/react";

import Header from "./Header";

export default function Content() {
  return (
    <>
      <Head>
        <title>Private Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Center w="100%" h="85vh" bg="#FFEBEE">
        <Stack spacing={14} w="80%" style={{ textAlign: "center" }}>
          <Box>
            <Heading
              size="3xl"
              color=" #800080"
              style={{ fontFamily: "monospace", marginBottom: "25px" }}
            >
              This is a private page
            </Heading>
            <Text
              fontSize="2xl"
              color="#993299"
              style={{ fontFamily: "monospace" }}
            >
              Your session is stored in a database and once you log Out it will
              be deleted and no one can re-use it
            </Text>
          </Box>
          <Box>
            <Button
              bg="#800080"
              color="white"
              colorScheme="blue"
              w="100px"
              onClick={() => signOut()}
            >
              SignOut
            </Button>
          </Box>
        </Stack>
      </Center>
    </>
  );
}
