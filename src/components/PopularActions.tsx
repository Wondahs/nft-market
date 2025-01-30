import AuctionType from "@/config/typings";
import MidCard from "./MidCard";

const PopularAuctions = () => {

    const auctionsMid: Array<AuctionType> = [
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
            imageSrc: '/assets/midcard/Image1.png',
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
            imageSrc: '/assets/midcard/Image2.png',
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
            imageSrc: '/assets/midcard/Image3.png',
            imageAlt: 'Auction4 Image',
            desc: 'Senectus adipiscing nascetur accumsan etiam',
            price: 2.55,
            time: '37:01',
            bidders: 14,
            avatars: [
                '/assets/auctionImgs/auction4/01.png',
                '/assets/auctionImgs/auction4/02.png',
                '/assets/auctionImgs/auction4/03.png',]
        },
        {
            imageSrc: '/assets/midcard/Image4.png',
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
        },
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
        <section className="mt-20 pop-auctions font-sora flex flex-col items-center">
            <p>OVERLINE</p>
            <h4 className="mt-8 mb-5 text-white text-4xl">Most popular live actions</h4>
            <div className="tabs gap-3 flex flex-row items-center justify-center">
                <span className="p-2 border border-[#374467] rounded-xl">Architecture</span>
                <span className="p-2 border border-[#374467] rounded-xl">Photography</span>
                <span className="p-2 border border-[#374467] rounded-xl">Games</span>
                <span className="p-2 border border-[#374467] rounded-xl">Music</span>
            </div>
            <div className="mid-cards flex flex-row gap-2 mt-8 items-center justify-center">
                {auctionsMid && auctionsMid.map((auction, index) =>(
                    <MidCard key={index} auctionData={auction}/>
                ))}
            </div>
        </section>
    );
}

export default PopularAuctions;