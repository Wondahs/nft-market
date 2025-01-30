import Auctions from "@/components/Auctions";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Auctions />
      <MidSection />
    </>
  );
}
