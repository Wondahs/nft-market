import Auctions from "@/components/Auctions";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import SectionFour from "@/components/SectionFour";
import TripleSection from "@/components/TripleSection";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Auctions />
      <MidSection />
      <TripleSection />
      <SectionFour />
    </>
  );
}
