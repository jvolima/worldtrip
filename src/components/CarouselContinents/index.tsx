import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ContinentProps {
  name: string;
  description: string;
  image_url: string;
}

export function CarouselContinent() {
  const continents: ContinentProps[] = [
    {
      name: 'Europa',
      description: 'o continente mais antigo',
      image_url: '/continentEurope.png'
    },
    {
      name: 'Ásia',
      description: 'o continente mais antigo',
      image_url: '/continentEurope.png'
    },
    {
      name: 'América do Sul',
      description: 'o continente mais antigo',
      image_url: '/continentEurope.png'
    },
    {
      name: 'América do Norte',
      description: 'o continente mais antigo',
      image_url: '/continentEurope.png'
    },
    {
      name: 'África',
      description: 'o continente mais antigo',
      image_url: '/continentEurope.png'
    },
    {
      name: 'Oceania',
      description: 'o continente mais antigo',
      image_url: '/continentEurope.png'
    }
  ]

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation  
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        continents.map(continent => (
          <SwiperSlide key={Math.random()}>
            <Flex
              bgImage={continent.image_url} 
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              justify="center" 
              align="center" 
              flexDirection="column"
              h={["375px", "450px"]}
            >
              <Heading 
                fontSize={["2xl", "5xl"]}
                textAlign="center"
                color="gray.50" 
                lineHeight={["9", "4.5rem"]} fontWeight="bold"
              >
                {continent.name}
              </Heading>
              <Text 
                fontSize={["sm", "2xl"]} 
                textAlign="center" 
                color="gray.300" 
                lineHeight={["shorter", "9"]} 
                fontWeight="bold"
              >
                {continent.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}