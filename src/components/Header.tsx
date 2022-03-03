import { Text, Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/Io"

export function Header() {
  const isInHome = true;

  return (
    <Flex 
      as="header" 
      alignItems="center"
      maxWidth={1120}
      w="100%"
      my="6"
      mx="auto"
    >
      {
        !isInHome &&
        <Link href="/" passHref>
          <Icon mt="2" as={IoIosArrowBack} cursor="pointer" fontSize="32"/>
        </Link>
      }

      <Flex justify="center" flex="1">
        <Image src="/logo.svg" alt="Logo" />
      </Flex>
    </Flex>
  )
}