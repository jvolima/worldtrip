import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { BannerContinent } from '../../components/BannerContinent';
import { Cities } from '../../components/Cities';
import { Header } from '../../components/Header';

interface Continent {
  name: string;
  content: string;
  bannerContent: string;
  countries: string;
  citiesWithMoreThan100k: string;
  languages: string; 
}

interface City {
  name: string;
  country: string;
  flag: string;
  image_url: string;
}

interface ContinentsProps {
  continent: Continent;
  cities: City[];
}

export default function Continents({ continent, cities }: ContinentsProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
      </Head>

      <Header />
      <BannerContinent name={continent.name} bannerContent={continent.bannerContent} />

      <Flex 
        maxWidth={1240} 
        mx="auto" 
        mt={["20"]} 
        w="100%" 
        align="center" 
        justify="space-between"
      >
        <Text maxWidth={600} textAlign="justify" fontSize={["2xl"]} lineHeight={["9"]} color="gray.600">
          {continent.content}
        </Text>

        <HStack spacing="3rem">
          <Flex align="center" justify="center" direction="column">
            <Heading fontSize={["5xl"]} fontWeight="600" lineHeight={["4.5rem"]} color="yellow.400">
              {continent.countries}
            </Heading>
            <Text fontSize={["2xl"]} fontWeight="600" lineHeight={["9"]}>
              países
            </Text>
          </Flex>

          <Flex align="center" justify="center" direction="column">
            <Heading fontSize={["5xl"]} fontWeight="600" lineHeight={["4.5rem"]} color="yellow.400">
              {continent.languages}
            </Heading>
            <Text fontSize={["2xl"]} fontWeight="600" lineHeight={["9"]}>
              línguas
            </Text>
          </Flex>

          <Flex align="center" justify="center" direction="column">
            <Heading fontSize={["5xl"]} fontWeight="600" lineHeight={["4.5rem"]} color="yellow.400">
              {continent.citiesWithMoreThan100k}
            </Heading>
            <Text fontSize={["2xl"]} fontWeight="600" lineHeight={["9"]}>
              cidades + 100
            </Text>
          </Flex>
        </HStack>
      </Flex>

      <Cities cities={cities}/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await axios.get(`http://localhost:3333/continents/${id}`)

  const continent = response.data

  const cities = continent.mostFamousCities

  return {
    props: {
      continent,
      cities
    },
    revalidate: 60 * 60 * 24 // 1 dia
  }
}


