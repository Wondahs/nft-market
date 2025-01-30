import Auctions from "@/components/Auctions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import PopularAuctions from "@/components/PopularActions";
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
      <PopularAuctions />
      <Footer />
    </>
  );
}
