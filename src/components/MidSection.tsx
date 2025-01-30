import Image from "next/image";
import RightImage from '@/assets/Right - Image.png';

const MidSection = () => {
    return ( 
        <section className="mid-section flex flex-row w-[35%]">
            <div className="left-div flex flex-col items-start">
                <h1 className="text-white text-6xl">Sapien ipsum scelerisque convallis fusce</h1>
            </div>
            <div className="right-div">
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