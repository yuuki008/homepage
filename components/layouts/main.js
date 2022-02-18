import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Loader from "../voxel-loader";

const LazyComponent = dynamic(() => import("../screen"), {
  ssr: false,
  loading: () => <Loader />,
});

const Main = ({ children, router, setLocale, locale }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nomu's homepage" />
        <meta name="author" content="Yuuki Noumura" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="shortcut icon"
          href="/images/avataaars.png"
          type="image/x-icon"
        />
        <meta property="og:site_name" content="Yuuki Noumura's Homepage" />
        <meta property="og:type" content="website" />
        <title>Yuuki Noumura - Homepage</title>
      </Head>

      <NavBar path={router.asPath} setLocale={setLocale} locale={locale} />
      <Container maxW="container.md" pt={14}>
        <LazyComponent />

        {children}
      </Container>
    </Box>
  );
};

export default Main;
