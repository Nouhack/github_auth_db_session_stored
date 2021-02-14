import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center bg="white" h="100vh" color="white">
      <Spinner
        thickness="10px"
        speed="1s"
        emptyColor="gray.200"
        color="#800080"
        size="xl"
      />
    </Center>
  );
}
