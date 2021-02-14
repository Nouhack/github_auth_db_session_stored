import { Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="#FFEBEE" w="100%" pt={3} pl={2} color="none" h="15vh">
      <img src="logo.png" alt="" style={{ height: "100%" }} />
    </Box>
  );
}
