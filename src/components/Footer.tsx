import FooterLogo from '@/assets/LogoFooter.png';
import Image from 'next/image';
import FacebookIcon from '@/assets/Facebook Icon.png';
import GithubIcon from '@/assets/Github Icon.png';
import InstagramIcon from '@/assets/Instagram Icon.png';
import LinkedinIcon from '@/assets/LinkedIn Icon.png';
import TwitterIcon from '@/assets/Twitter Icon.png';

const Footer = () => {
    return ( 
        <footer className="flex p-0 flex-row justify-center items-stretch w-[75%] border border-gray-500 rounded-2xl mx-auto mt-20 mb-10">
            <div className="left border-r  border-r-gray-700 p-5 flex-1 flex flex-col items-start justify-stretch">
                <Image className='mb-60' width={213} height={34} alt='Footer Logo' src={FooterLogo} />
                <div className=" font-inter menu flex flex-row justify-start mt-auto">
                    <p className='text-xs mr-4'>Support</p>
                    <p className='text-xs mr-4'>Terms of service</p>
                    <p className='text-xs mr-4'>License</p>
                </div>
            </div>
            <div className="mid mb-0 p-5 flex-1 flex flex-col">
                <ul className="links mb-auto">
                    <li className='mb-3 text-white'><a href="#">Auction</a></li>     
                    <li className='mb-3 text-white'><a href="#">Roadmap</a></li>     
                    <li className='mb-3 text-white'><a href="#">Discover</a></li>     
                    <li className='mb-3 text-white'><a href="#">Community</a></li>     
                </ul>

                <ul className="socials mt-auto mb-0 flex flex-row gap-4">
                    <li><Image width={20} alt='Facebook' src={FacebookIcon}></Image></li>
                    <li><Image width={20} alt='Github' src={GithubIcon}></Image></li>
                    <li><Image width={20} alt='Linkedin' src={LinkedinIcon}></Image></li>
                    <li><Image width={20} alt='Twitter' src={TwitterIcon}></Image></li>
                    <li><Image width={20} alt='Instagram' src={InstagramIcon}></Image></li>
                </ul>
            </div>
            <div className="right border-l  border-l-gray-700 p-5 flex flex-col flex-1">
                <p className='mb-auto'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
                <div className="newsletter items-center flex flex-row bg-white rounded-2xl p-4">
                    <input className='bg-transparent border-none p-1' type="text" placeholder='Newsletter' />
                    <a className='font-bold text-[#2A27C9]' href="#">Sign in</a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;