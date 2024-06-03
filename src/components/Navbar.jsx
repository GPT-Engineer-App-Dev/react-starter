import { Box, Flex, Text, IconButton, useDisclosure, Stack } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" color="white">MyApp</Text>
        <IconButton
          size="md"
          icon={isOpen ? "X" : "≡"}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <MobileNav />
        </Box>
      ) : null}
    </Box>
  );
};

const DesktopNav = () => (
  <Stack direction="row" spacing={4}>
    <Text color="white">Home</Text>
    <Text color="white">About</Text>
    <Text color="white">Contact</Text>
  </Stack>
);

const MobileNav = () => (
  <Stack as={"nav"} spacing={4}>
    <Text color="white">Home</Text>
    <Text color="white">About</Text>
    <Text color="white">Contact</Text>
  </Stack>
);

export default Navbar;