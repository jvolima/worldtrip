import { Text, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { BannerSlogan } from "../components/BannerSlogan";
import { GridBenefits } from "../components/GridBenefits";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | worldtrip</title>
      </Head>

      <Header />

      <BannerSlogan />

      <GridBenefits />

      <Flex
        mt={["9", "20"]}
        mx="auto"
        align="center" 
        justifyContent="center"        
        w="5.625rem"
        border="1px"
        borderStyle="solid"
        borderColor="gray.600"
      />

      <Flex
        mt={["6", "14"]}
        align="center" 
        justifyContent="center"
      >
        <Text
          fontWeight="500"
          fontSize={["xl", "4xl"]}
          lineHeight={["1.875rem", "3.375rem"]}
          textAlign="center"
        >
          Vamos nessa? <br /> 
          Então escolha seu continente
        </Text>
      </Flex>
    </>
  )
}
