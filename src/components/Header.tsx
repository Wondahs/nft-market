import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import '@/assets/styles.css';

const Header = () => {
    return ( 
        <header 
        className='header font-sora flex justify-between items-center py-4 px-8 mb-28'>
            <div className="left">
            <Image src={Logo} alt="logo" width={200} height={200} />

            </div>
            <ul className='mid flex flex-row gap-2'>
                <li className='m-3'>Auctions</li>
                <li className='m-3'>Roadmap</li>
                <li className='m-3'>Discover</li>
                <li className='m-3'>Community</li>
            </ul>
            <div className="right flex flex-row gap-3">
                <button className='white-button py-4 px-6 rounded-xl'>Contact</button>
                <button className='colour-button py-4 px-6 text-white font-bold text-base rounded-xl'>My account</button>
            </div>
        </header>
     );
}
 
export default Header;