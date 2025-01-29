import LargeCard from "./LargeCard";
import AuctionType from "@/config/typings";
import AuctionImg1 from '@/assets/auctionImgs/Image.png';
import AuctionImg2 from '@/assets/auctionImgs/Image-1.png';
import AuctionImg3 from '@/assets/auctionImgs/Image-2.png';
import AuctionImg4 from '@/assets/auctionImgs/Image-3.png';
import AuctionImg5 from '@/assets/auctionImgs/Image-4.png';

const auctions: Array<AuctionType> = [
    {
        imageSrc: '@/assets/auctionImgs/Image.png',
        desc: 'Tristique diam a, enim, eros tellus. Viverra etiam',
        price: 2.55,
        endTime: '57:15 min',
        bidders: 14,
        avatars: []
    }
]

const Auctions = () => {
    return ( 
        <section className="auctions flex flex-col items-center">
            <h4>Latest live auctions</h4>
            <div className="auction-cards">
                <LargeCard></LargeCard>
            </div>
        </section>
     );
}
 
export default Auctions;