import Image from "next/image";
import '@/assets/styles.css';
import Curve from '@/assets/Frame (1).png';
import Curve2 from '@/assets/Frame.png';

const Hero = () => {
  return (
    <div className="hero font-sora">
      <p className="text-center text-sm mb-10 font-inter">NON FUNGIBLE TOKENS</p>
      <div className="flex flex-row justify-center items-center">
        <h1 className="line-height text-white text-[120px] font-bold text-center m-0 p-0 font-sora">
          A new NFT
        </h1>
        <Image src={Curve} alt="" width={40} height={91} ></Image>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Image src={Curve2} alt="" width={62} height={62} ></Image>
        <h1 className="line-height text-white text-[120px] font-bold text-center m-0 p-0 font-sora">
        Experience
        </h1>
      </div>
    </div>
  );
};

export default Hero;
