import Image from "next/image";
import LeftImage from '@/assets/Left - Image.png';
import TvIcon from '@/assets/TvIcon.svg';
import GroupIcon from '@/assets/GroupIcon.svg';

const SectionFour = () => {
    return (
        <section className="font-sora mid-section flex flex-row items-center mx-auto mt-20 gap-16 w-[75%]">
            <div className="right-div w-[45%] ml-auto">
                <Image
                    src={LeftImage}
                    alt="Right Image"
                    width={684}
                    height={616}
                ></Image>
            </div>
            <div className="left-div flex flex-col items-start mr-auto w-[45%]">
                <p className="text-sm mb-4">OVERLINE</p>
                <h1 className="text-white text-6xl mb-4">Habitant tristique aliquam in vel scelerisque</h1>
                <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className="icons mt-10 mb-10 flex flex-row gap-8 items-center">
                    <div className="first-icon mr-4">
                        <Image
                            src={TvIcon}
                            alt='Icon 1'
                            width={32}
                            height={32}
                            className="mb-3"
                        />
                        <h6 className="text-white">Sollicitudin sapien</h6>
                        <p className='text-sm ml-2'>Feature 1</p>
                    </div>
                    <div className="first-icon">
                        <Image
                            src={GroupIcon}
                            alt='Icon 1'
                            width={32}
                            height={32}
                            className="mb-3"
                        />
                        <h6 className="text-white">Pulvinar metus</h6>
                        <p className='text-sm ml-2'>Feature 1</p>
                    </div>
                </div>
                <div className="buttons right flex flex-row gap-8">
                    <button className='colour-button py-4 px-6 text-white text-base rounded-xl'>Get started</button>
                    <button className='white-button py-4 px-6 rounded-xl'>Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default SectionFour;