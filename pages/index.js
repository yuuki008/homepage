import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import {
  // IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io5";
import Image from "next/image";
import styled from "styled-components";
import ZennIcon from "../components/zenn-icon";

const Home = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }} marginBottom={"16"}>
          <Box flexGrow={1}>
            <Heading
              as="h2"
              marginBottom={2}
              marginTop={20}
              variant="page-title"
            >
              {data.name}
            </Heading>
            <div>{data.role}</div>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              src="/images/avataaars.png"
              alt="Profile image"
              width={180}
              height={180}
            />
          </Box>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          {data.message}
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>{data.about}</Paragraph>
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
            {/* <ListItem>
            <Link href="https://twitter.com/ax0kQcEB93ntx6X" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @yuuki008
              </Button>
            </Link>
          </ListItem> */}
            <ListItem>
              <Link href="https://zenn.dev/nomu" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  <ZennIcon color="second" />
                  <span style={{ paddingLeft: "9px" }} />
                  @yuuki008
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin: 8px auto;
`;

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  white-space: pre-wrap;
`;
