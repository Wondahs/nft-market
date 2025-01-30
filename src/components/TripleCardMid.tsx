import AuctionType from "@/config/typings";
import MidCard from "./MidCard";

const TripleMidCard = () => {

    const auctionsMid: Array<AuctionType> = [
        {
            imageSrc: '/assets/midcard/Image5.png',
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
            <h5 className="text-3xl mb-5 text-white font-bold text-wrap">Checkout the hottest sale offers</h5>
            <div className="card flex flex-row overflow-hidden">

                {auctionsMid && auctionsMid.map((auction, index) => (
                    <MidCard
                        key={index}
                        auctionData={auction}
                    />
                ))}
            </div>
            <button className="px-4 py-6 bg-transparent rounded-xl w-[100%] border border-[#393e4c]">
                Show me more
            </button>
        </div>
    );
}

export default TripleMidCard;