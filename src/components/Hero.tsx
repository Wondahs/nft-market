import Image from "next/image";
import '@/assets/styles.css';
import Curve from '@/assets/Frame (1).png';
import Curve2 from '@/assets/Frame.png';
import Squares from '@/assets/Squares.svg';
import AdidasLogo from '@/assets/Adidas.svg';
import NikeLogo from '@/assets/Nike.svg';
import RitterLogo from '@/assets/Ritter-Sport.svg';
import HollandLogo from '@/assets/New-Holland.svg';
import SearchIcon from '@/assets/Search Icon.svg';

const Hero = () => {
  return (
    <div className="hero font-sora flex flex-col items-center">
      <Image className="squares" src={Squares} alt="" width={1851}></Image>
      <p className="text-center text-sm mb-10 font-inter">NON FUNGIBLE TOKENS</p>
      <div className="flex flex-row justify-center items-center">
        <h1 className="line-height text-white text-[120px] font-bold text-center m-0 p-0 font-sora">
          A new NFT
        </h1>
        <Image src={Curve} alt="" width={40} height={91} ></Image>
      </div>
      <div className="flex flex-row justify-center items-center mb-10">
        <Image src={Curve2} alt="" width={62} height={62} ></Image>
        <h1 className="line-height text-white text-[120px] font-bold text-center m-0 p-0 font-sora">
          Experience
        </h1>
      </div>
      <p className="text-center text-sm mb-5 font-inter">Discover, collect and sell</p>
      <div className="search bg-white p-4 mt-5 mb-16 rounded-xl flex flex-row justify-between items-center gap-5">
        <input className="bg-transparent border-none border-black border-r-2 pr-2" type="text" placeholder="Items, collections and creators" />
        <details className="relative inline-block">
          <summary className="cursor-pointer bg-white px-4 py-2 rounded-lg">
            Category
          </summary>
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
          </div>
        </details>

        <Image src={SearchIcon} width={24} alt="search icon"></Image>
      </div>
      <div className="logo flex flex-row justify-between items-center mt-5 w-[30%]">
        <Image src={RitterLogo} alt="" width={85} height={45} ></Image>
        <Image src={NikeLogo} alt="" width={85} height={45} ></Image>
        <Image src={AdidasLogo} alt="" width={85} height={45} ></Image>
        <Image src={HollandLogo} alt="" width={85} height={45} ></Image>
      </div>
    </div>
  );
};

export default Hero;
