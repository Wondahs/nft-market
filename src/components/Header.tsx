import Image from 'next/image';
import Logo from '@/assets/Logo.png';

const Header = () => {
    return ( 
        <header>
            <div className="left">
            <Image src={Logo} alt="logo" width={34} height={34} />

            </div>
            <ul className="mid">
                <li>Auctions</li>
                <li>Roadmap</li>
                <li>Discover</li>
                <li>Community</li>
            </ul>
            <div className="right">
                <button>Contact</button>
                <button>My account</button>
            </div>
        </header>
     );
}
 
export default Header;