import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import Background from "~/components/Background";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={GeistSans.className}>
      <Background />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
