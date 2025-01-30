import AuctionType from "@/config/typings";
import TimeIcon from '@/assets/TimeIcon.svg';
import Image from "next/image";

export default function LargeCard({
  auctionData,
}: {
  auctionData: AuctionType;
}) {
  return (
    <div className="font-sora max-w-sm mx-auto bg-transparent border-[#393e4c] border rounded-2xl shadow-lg overflow-hidden text-white p-3">
      <div className="relative">
        <Image
          src={auctionData.imageSrc} // Replace with your image URL
          alt={auctionData.imageAlt}
          width={400}
          height={520}
          className="w-full rounded-xl"
        />
        <div className="rounded-xl absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="p-4 space-y-2">
        <div className="desc-price flex flex-row items-start">
          <h6 className="text-lg font-semibold text-wrap">{auctionData.desc}</h6>
          <p className="bg-[#514CFF26] hover:bg-blue-500 text-[#514CFF] px-3 py-1 rounded-sm text-[.8rem] font-bold text-nowrap text-center">
            {auctionData.price} ETH</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Image src={TimeIcon} alt="Time Icon" width={16} height={16}></Image>
            <span>{auctionData.time} min left</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 p-4">
        <div className="flex justify-between items-center">
          <div className="flex -space-x-3">
            {auctionData.avatars.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`User ${index + 1}`}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-gray-800"
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">14 people are bidding</span>
          {/* Heart Icon */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656L10 16.828l-6.828-6.828a4 4 0 010-5.656z" />
            </svg>
            <span>54</span>
          </div>
        </div>
      </div>
    </div>
  );
}
