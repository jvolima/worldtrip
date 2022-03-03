import Head from "next/head";
import { BannerSlogan } from "../components/BannerSlogan";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | worldtrip</title>
      </Head>

      <Header />

      <BannerSlogan />
    </>
  )
}
