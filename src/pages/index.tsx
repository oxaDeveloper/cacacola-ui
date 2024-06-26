import Head from "next/head";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Partners from "~/components/Partners";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coca-Cola | UI</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <Hero />
        <Partners />
      </main>
    </>
  );
}
