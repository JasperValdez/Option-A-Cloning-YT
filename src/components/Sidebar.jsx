import { HiChevronRight } from "react-icons/hi";

const videos = [
  {
    id: 1,
    thumbnail: "/thumb1.png",
    title: "Scenic Wildlife in 4K HDR Ultra HD",
    channel: "4K Video Ultra HD",
    meta: "1.6M views • 5 months ago",
  },
  {
    id: 2,
    thumbnail: "/thumb2.png",
    title: "TEYODI",
    channel: "CONG TV",
    meta: "2.1M views • 4 days ago",
  },
  {
    id: 3,
    thumbnail: "/thumb3.png",
    title: "fitterkarma- Pag-Ibig ay Kanibalismo (OFFICIAL MUKBANG VIDEO)",
    channel: "fitterkarma",
    meta: "4.3M views • 10 months ago",
  },
  {
    id: 4,
    thumbnail: "/thumb4.png",
    title: "Every Classroom Sketch Ever- Key & Peele",
    channel: "Comedy Central",
    meta: "22M views • 5 years ago",
  },

    {
    id: 5,
    thumbnail: "/thumb5.png",
    title: "Survive 1000 Days, Win $100,000",
    channel: "MrBeast Gaming",
    meta: "66M views • 3 months ago",
  },

    {
    id: 6,
    thumbnail: "/thumb6.png",
    title: "Unmatched Clarity and Depth in 8K HDR 60fps Dolby Vision",
    channel: "8K Clarity",
    meta: "256K views • 3 days ago",
  },

    {
    id: 7,
    thumbnail: "/thumb7.png",
    title: "Multo (Live at The Cozy Cove) - Cup of Joe",
    channel: "Nine Degrees North",
    meta: "106M views • 10 months ago",
  },

    {
    id: 8,
    thumbnail: "/thumb8.png",
    title: "IV OF SPADES - Aura (Official Music Video)",
    channel: "IV OF SPADES",
    meta: "15M views • 5 months ago",
  },
];


export default function Sidebar() {
  return (
    <div className="w-[380px]">

    
<div className="flex items-center gap-[6px] mb-4 whitespace-nowrap">
  <button className="h-[28px] px-[10px] rounded-full bg-white text-black text-[13px] font-medium leading-none">
    All
  </button>

  <button className="h-[28px] px-[10px] rounded-full bg-ytGray text-white text-[13px] font-medium leading-none hover:bg-[#3a3a3a] transition">
    From your search
  </button>

<button className="h-[28px] px-[10px] rounded-full bg-ytGray hover:bg-[#3a3a3a] transition flex items-center">
  <span className="text-[13px] font-medium text-white whitespace-nowrap overflow-hidden block w-[137px]">
    From 4K Video ULTRA HD
  </span>
</button>



  <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full hover:bg-[#3a3a3a] transition">
    <HiChevronRight className="text-[18px]" />
  </button>
</div>


      {/* VIDEOS */}
     {videos.map((video) => (
  <div key={video.id} className="flex gap-3 mb-4">
    <img
      src={video.thumbnail}
      alt={video.title}
      className="w-40 h-24 rounded-lg object-cover flex-shrink-0"
    />

    <div>
      <p className="text-sm font-semibold leading-tight line-clamp-2">
        {video.title}
      </p>

      <p className="text-xs text-ytLightGray mt-1">
        {video.channel}
      </p>

      <p className="text-xs text-ytLightGray">
        {video.meta}
      </p>
    </div>
  </div>
))}

    </div>
  );
}
