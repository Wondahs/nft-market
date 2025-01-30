import Image from "next/image";
import RightImage from '@/assets/Right - Image.png';

const MidSection = () => {
    return ( 
        <section className="font-sora mid-section flex flex-row items-center mx-auto mt-20 gap-5 w-[75%]">
            <div className="left-div flex flex-col items-start mr-auto w-[45%]">
                <p className="text-sm mb-4">OVERLINE</p>
                <h1 className="text-white text-6xl mb-4">Sapien ipsum scelerisque convallis fusce</h1>
                <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className="buttons right flex flex-row gap-3 mt-5">
                <button className='colour-button py-4 px-6 text-white text-base rounded-xl'>Get started</button>
                <button className='white-button py-4 px-6 rounded-xl'>Learn more</button>
            </div>
            </div>
            <div className="right-div w-[45%] ml-auto">
                <Image
                    src={RightImage}
                    alt="Right Image"
                    width={684}
                    height={616}
                ></Image>
            </div>
        </section>
     );
}
 
export default MidSection;