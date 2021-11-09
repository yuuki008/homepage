import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
} from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          {data.message}
        </Box>

        <Box display={{ md: 'flex' }} marginBottom={"16"}>
          <Box flexGrow={1}>
            <Heading as="h2" marginBottom={2} variant="page-title">
              {data.name}
            </Heading>
            <p>{data.role}</p>
          </Box>
          {/* <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/nomu.jpg"
              alt="Profile image"
            />
          </Box> */}
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            {data.about}
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            {data.bio.born}
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            {data.bio.highSchool}
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            {data.bio.university}
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            {data.bio.atworked}
          </BioSection>
        </Section>


        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Sns
          </Heading>
          <List>
          <ListItem>
            <Link href="https://github.com/yuuki008" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @yuuki008
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ax0kQcEB93ntx6X" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @yuuki008
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://zenn.dev/nomu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
              >
                zenn @yuuki008
              </Button>
            </Link>
          </ListItem>
        </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home