import Head from 'next/head';
import { Flex, Image, Text, Divider, Grid, Circle, Box } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';

import { Header } from '../components/Header';
import { ComponentSlide } from '../components/ComponentSlide';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip - Home</title>
      </Head>

      <Flex direction="column">
        <Header />
        <Flex
          w="100%"
          h={["163px", "250px", "250px", "335px"]}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage="url(/images/sky.png)"
        >
          <Flex
            w="100%"
            align="center"
            justify="space-between"
            pl={["1rem", "4rem", "4rem", "8.75rem"]}
            pr={["1.25rem", "4rem", "4rem", "8.75rem"]}
          >
            <Flex direction="column">
              <Text
                as="h1"
                color="brand.50"
                fontWeight="500"
                fontSize={["1.25rem", "1.5rem", "1.5rem", "2.25rem"]}
              >
                5 Continentes,
                <br />
                infinitas possibilidades.
              </Text>
              <Text
                color="brand.75"
                fontSize={["0.875rem", "1rem", "1rem", "1.25rem"]}
                mt={["8px", "20px"]}
                maxW="524px"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
            <Image
              transform="translateY(48px)"
              display={["none", "none", "block", "block"]}
              src="/images/airplane.svg"
              alt="Avião"
              w={["", "", "300px", "416px"]}
              ml="2rem"
            />
          </Flex>
        </Flex>
        <Grid
          flexWrap="wrap"
          justify="space-between"
          w="100%"
          align="center"
          maxW="1160px"
          mt={["36px", "36px", "114px"]}
          ml="auto"
          mr="auto"
          gap={1}
          templateColumns={[
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr",
            "repeat(5, 1fr)"
          ]}
        >
          <Box>
            <Flex direction={["row", "column"]} w="158px" align="center" justify="center">
              <Image display={["none", "block"]} src="/images/icons/cocktail.svg" alt="A cocktail icon" />
              <Circle display={["block", "none"]} bg="brand.100" width="8px" height="8px" />
              <Text ml={["8px", "0px"]} mt={["", "24px"]} color="brand.200" fontWeight={["400", "600"]} fontSize={["1.125rem", "1.5rem"]}>vida noturna</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={["row", "column"]} w="158px" align="center" justify="center">
              <Image display={["none", "block"]} src="/images/icons/surf.svg" alt="A beatch icon" />
              <Circle display={["block", "none"]} bg="brand.100" width="8px" height="8px" />
              <Text ml={["8px", "0px"]} mt={["", "24px"]} color="brand.200" fontWeight={["400", "600"]} fontSize={["1.125rem", "1.5rem"]}>praia</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={["row", "column"]} w="158px" align="center" justify="center">
              <Image display={["none", "block"]} src="/images/icons/building.svg" alt="A building icon" />
              <Circle display={["block", "none"]} bg="brand.100" width="8px" height="8px" />
              <Text ml={["8px", "0px"]} mt={["", "24px"]} color="brand.200" fontWeight={["400", "600"]} fontSize={["1.125rem", "1.5rem"]}>moderno</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={["row", "column"]} w="158px" align="center" justify="center">
              <Image display={["none", "block"]} src="/images/icons/museum.svg" alt="A museum icon" />
              <Circle display={["block", "none"]} bg="brand.100" width="8px" height="8px" />
              <Text ml={["8px", "0px"]} mt={["", "24px"]} color="brand.200" fontWeight={["400", "600"]} fontSize={["1.125rem", "1.5rem"]}>clássico</Text>
            </Flex>
          </Box>
          <Box gridColumn={["span 2/span 2", "span 2/span 2", "span 2/span 2", "span 1/span 1"]}>
            <Flex direction={["row", "column"]} w="158px" align="center" justify="center">
              <Image display={["none", "block"]} src="/images/icons/earth.svg" alt="An earth icon" />
              <Circle display={["block", "none"]} bg="brand.100" width="8px" height="8px" />
              <Text ml={["8px", "0px"]} mt={["", "24px"]} color="brand.200" fontWeight={["400", "600"]} fontSize={["1.125rem", "1.5rem"]}>e mais...</Text>
            </Flex>
          </Box>
        </Grid>
        <Divider w={["60px", "90px"]} h={["1px", "2px"]} background="brand.200" m="5rem auto 3.25rem auto" />
        <Flex direction="column">
          <Text
            as="h2"
            textAlign="center"
            color="brand.200"
            fontSize={["1.25rem", "2.25rem"]}
            mb="3.25rem"
          >
            Vamos nessa?
            <Flex as="br" />
            Então escolha seu continente
          </Text>
          <Flex
            ml="auto"
            mr="auto"
            mb={["24px", "40px"]}
            maxW="1240px"
            width="100%"
            h={["250px", "450px"]}
          >
            <Swiper
              cssMode
              navigation
              pagination
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            >
              <SwiperSlide style={{ width: '1240px' }}>
                <ComponentSlide
                  backgroundImage="/images/continents/carousel/london.png"
                  href="/continents/europe"
                  name="Europe"
                  description="O continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: '1240px' }}>
                <ComponentSlide
                  backgroundImage="/images/continents/carousel/london.png"
                  href="/continents/europe"
                  name="Europe"
                  description="O continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: '1240px' }}>
                <ComponentSlide
                  backgroundImage="/images/continents/carousel/london.png"
                  href="/continents/europe"
                  name="Europe"
                  description="O continente mais antigo."
                />
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
