import AuctionType from "@/config/typings";
import SmallCard from "./SmallCard";

const TripleCard = () => {
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
            imageSrc: '/assets/smallcard/Image1.png',
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
            imageSrc: '/assets/smallcard/Image2.png',
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
            imageSrc: '/assets/smallcard/Image3.png',
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
        {
            imageSrc: '/assets/smallcard/Image4.png',
            imageAlt: 'Auction5 Image',
            desc: 'Tristique diam a, enim, eros tellus. Viverra etiam',
            price: 2.55,
            time: '57:15 min',
            bidders: 14,
            avatars: [
                '/assets/auctionImgs/auction5/01.png',
                '/assets/auctionImgs/auction5/02.png',
                '/assets/auctionImgs/auction5/03.png',
                '/assets/auctionImgs/auction5/04.png',
            ]
        }
    ]
    return ( 
        <div className="triple-card p-5 border-[#393e4c] border rounded-2xl flex flex-col items-start bg-[#060714]">
            <h5 className="text-3xl mb-5 text-white font-bold w-[80%] text-wrap">Top NFT at a lower price</h5>
            {auctions && auctions.map((auction, index) => (
                <SmallCard
                    key={index}
                    auctionData={auction}
                />
            ))}
            <button className="px-4 py-6 bg-transparent rounded-xl w-[100%] border border-[#393e4c]">
                Show me more
            </button>
        </div>
     );
}
 
export default TripleCard;