import AuctionType from "@/config/typings";
import Image from "next/image";

export default function MidCard({
    auctionData
}:{auctionData: AuctionType}) {
    return (
      <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-white">
        <div className="relative">
          <Image
            src={auctionData.imageSrc} // Replace with your image URL
            alt={auctionData.imageAlt}
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
  
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold truncate">{auctionData.desc}</h3>
          <p className="text-sm text-gray-400">{auctionData.price}</p>
  
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m-6 5V6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2z"
                />
              </svg>
              <span>{auctionData.time} min left</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg">
              Bid
            </button>
          </div>
        </div>
  
        <div className="border-t border-gray-700 p-4">
          <div className="flex justify-between items-center">
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
            </div>
          </div>
        </div>
      </div>
    );
  }