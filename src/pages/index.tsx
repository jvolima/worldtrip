import { Text, Flex } from "@chakra-ui/react";
import { createServer } from "miragejs"
import Head from "next/head";
import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { BannerSlogan } from "../components/BannerSlogan";
import { CarouselContinent } from "../components/CarouselContinents";
import { GridBenefits } from "../components/GridBenefits";
import { Header } from "../components/Header";

interface Continent {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export default function Home() {
  
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    api.get("/continents").then(response => setContinents(response.data))
  }, [])

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

      <Flex  
        align="center" 
        justifyContent="center"
        mt={["5", "14"]}
        mb="10"
        mx="auto"
        maxWidth={1240}
        w="100%"
      >
        <CarouselContinent continents={continents} />
      </Flex>
    </>
  )
}
