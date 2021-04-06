import Head from 'next/head';
import {
  Flex,
  Text,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Icon,
  Grid,
  Box
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { City } from '../../components/City';

export default function Europa() {
  return (
    <>
      <Head>
        <title>WorldTrip - Continente (Europa)</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Flex
          align={["center", "end"]}
          justify={["center", "end"]}
          w="100%"
          h={["9.375rem", "31.25rem"]}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage="url(/images/continents/banners/london.png)"
        >
          <Text
            mt={["", "369px"]}
            ml={["", "140px"]}
            as="h1"
            fontWeight="600"
            fontSize={["1.75rem", "3rem"]}
            color="brand.50"
          >
            Europa
          </Text>
        </Flex>
        <Flex
          direction="column"
          width="100%"
          maxW="1160px"
          p="0 16px"
          mr="auto"
          ml="auto"
        >
          <Grid
            mt={["1.5rem", "5rem"]}
            mb={["2rem", "5rem"]}
            gap={["4", "16"]}
            templateColumns={[
              "1fr",
              "1fr",
              "1fr",
              "1fr 1fr",
              "1fr 1fr"
            ]}
          >
            <Text
              as="p"
              fontSize={["0.875rem", "1.5rem"]}
            >
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
            <Flex align="center" justify="space-between">
              <Flex direction="column" align="center" justify="center">
                <Text as="h2" fontSize={["1.5rem", "3rem"]} fontWeight="600" color="brand.100">50</Text>
                <Text fontSize={["1.125rem", "1.5rem"]} fontWeight={["400", "600"]}>países</Text>
              </Flex>
              <Flex direction="column" align="center" justify="center">
                <Text as="h2" fontSize={["1.5rem", "3rem"]} fontWeight="600" color="brand.100">60</Text>
                <Text fontSize={["1.125rem", "1.5rem"]} fontWeight={["400", "600"]}>línguas</Text>
              </Flex>
              <Flex direction="column" align="center" justify="center">
                <Text as="h2" fontSize={["1.5rem", "3rem"]} fontWeight="600" color="brand.100">27</Text>
                <Text
                  fontSize={["1.125rem", "1.5rem"]}
                  fontWeight={["400", "600"]}
                >
                  cidades +100
                <Popover>
                    <PopoverTrigger>
                      <Icon fontSize="1rem" ml="5px" as={FiInfo} />
                    </PopoverTrigger>
                    <PopoverContent position="absolute">
                      <PopoverCloseButton />
                      <PopoverBody>Londres, Paris, Roma, Praga, Amsterdã, Veneza, Atenas, Milão e etc...</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Text>
              </Flex>
            </Flex>
          </Grid>
          <Stack spacing="10" maxW="1160px" mb="2.1875rem">
            <Text fontWeight="500" fontSize={["1.5rem", "2.25rem"]} ml={["16px", "0px"]}>Cidades +100</Text>
            <Grid
              maxW="1160px"
              width="100%"
              align="center"
              ml="auto"
              mr="auto"
              templateColumns={[
                "1fr",
                "1fr 1fr",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={["20px", "46px"]}
            >
              <Box>
                <City city="Londres" image="/images/cities/london.png" country="Reino Unido" flag="/images/flags/united-kingdom.png" />
              </Box>
              <Box>
                <City city="Paris" image="/images/cities/paris.png" country="França" flag="/images/flags/france.png" />
              </Box>
              <Box>
                <City city="Roma" image="/images/cities/roma.png" country="Itália" flag="/images/flags/italy.png" />
              </Box>
              <Box>
                <City city="Praga" image="/images/cities/praga.png" country="Republica Tcheca" flag="/images/flags/czech-republic.png" />
              </Box>
              <Box>
                <City city="Amsterdã" image="/images/cities/amsterdan.png" country="Países baixos" flag="/images/flags/netherlands.png" />
              </Box>
            </Grid>
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}