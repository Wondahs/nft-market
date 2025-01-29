import Image from 'next/image';
import Logo from '@/assets/Logo.png';

const Header = () => {
    return ( 
        <header 
        className='header flex justify-between items-center p-4'>
            <div className="left">
            <Image src={Logo} alt="logo" width={100} height={100} />

            </div>
            <ul className='mid flex flex-row'>
                <li className='m-3'>Auctions</li>
                <li className='m-3'>Roadmap</li>
                <li className='m-3'>Discover</li>
                <li className='m-3'>Community</li>
            </ul>
            <div className="right">
                <button className='py-4 px-6 border-white'>Contact</button>
                <button className='py-4 px-6 text-white font-bold text-base bg-[]'>My account</button>
            </div>
        </header>
     );
}
 
export default Header;