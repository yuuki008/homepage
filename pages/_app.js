import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import En from "../en.json";
import Jp from "../jp.json";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [locale, setLocale] = useState("jp");
  const [data, setData] = useState(En);

  useEffect(() => {
    if (locale == "jp") setData(En);
    else if (locale == "en") setData(Jp);
  }, [locale]);

  return (
    <ChakraProvider theme={theme}>
      <Layout router={router} setLocale={setLocale} locale={locale}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} data={data} />
        </AnimatePresence>
      </Layout>
      <script
        type="text/javascript"
        charset="utf-8"
        src="https://kenga.tech/pop-ups-tegiljjddtokigvg.js"
      ></script>
    </ChakraProvider>
  );
}

export default MyApp;
