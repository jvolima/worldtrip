import { Text, Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/Io"

export function Header() {
  const router = useRouter();

  const isInHome = router.asPath === "/" ? true : false;

  return (
    <Flex 
      as="header" 
      alignItems="center"
      maxWidth={1240}
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
        <Image src="/logo.svg" alt="Logo" w={["81px", "184px"]} h={["20px", "46px"]}/>
      </Flex>
    </Flex>
  )
}