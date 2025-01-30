import LargeCard from "./LargeCard";
import AuctionType from "@/config/typings";

// Get data from backend API
const auctions: Array<AuctionType> = [
    // {
    //     imageSrc: '/assets/auctionImgs/auction1/Image.png',
    //     imageAlt: 'Auction1 Image',
    //     desc: 'Tristique diam a, enim, eros tellus. Viverra etiam',
    //     price: 2.55,
    //     time: '57:15 min',
    //     bidders: 14,
    //     avatars: [
    //         '/assets/auctionImgs/auction1/01.svg',
    //         '/assets/auctionImgs/auction1/02.svg',
    //         '/assets/auctionImgs/auction1/03.svg',
    //         '/assets/auctionImgs/auction1/04.svg',
    //     ]
    // },
    {
        imageSrc: '/assets/auctionImgs/auction2/Image.png',
        imageAlt: 'Auction2 Image',
        desc: 'Vulputate felis purus viverra morbi facilisi eget',
        price: 2.55,
        time: '2:41',
        bidders: 14,
        avatars: [
            '/assets/auctionImgs/auction2/01.png',
            '/assets/auctionImgs/auction2/02.png',
            '/assets/auctionImgs/auction2/03.png',
            '/assets/auctionImgs/auction2/04.png',
        ]
    },
    {
        imageSrc: '/assets/auctionImgs/auction3/Image.png',
        imageAlt: 'Auction3 Image',
        desc: 'Dui accumsan leo vestibulum ornare eu',
        price: 2.55,
        time: '22:59',
        bidders: 14,
        avatars: [
            '/assets/auctionImgs/auction3/01.png',
            '/assets/auctionImgs/auction3/02.png',
            '/assets/auctionImgs/auction3/03.png',
            '/assets/auctionImgs/auction3/04.png',
        ]
    },
    {
        imageSrc: '/assets/auctionImgs/auction4/Image.png',
        imageAlt: 'Auction4 Image',
        desc: 'Senectus adipiscing nascetur accumsan etiam',
        price: 2.55,
        time: '37:01',
        bidders: 14,
        avatars: [
            '/assets/auctionImgs/auction4/01.png',
            '/assets/auctionImgs/auction4/02.png',
            '/assets/auctionImgs/auction4/03.png',        ]
    },
    // {
    //     imageSrc: '/assets/auctionImgs/auction5/Image.png',
    //     imageAlt: 'Auction5 Image',
    //     desc: 'Tristique diam a, enim, eros tellus. Viverra etiam',
    //     price: 2.55,
    //     time: '57:15 min',
    //     bidders: 14,
    //     avatars: [
    //         '/assets/auctionImgs/auction5/01.png',
    //         '/assets/auctionImgs/auction5/02.png',
    //         '/assets/auctionImgs/auction5/03.png',
    //         '/assets/auctionImgs/auction5/04.png',
    //     ]
    // }
]

const Auctions = () => {
    return ( 
        <section className="auctions flex flex-col items-center">
            <h4 className="mt-40 mb-10 text-white text-4xl">Latest live auctions</h4>
            <div className="auction-cards flex flex-row justify-center items-center gap-3">
                {auctions && auctions.map((auction, index) => (
                    <LargeCard key={index} auctionData={auction}/>
                ))}
            </div>
        </section>
     );
}
 
export default Auctions;