import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineShare,
  HiOutlineDownload,
  HiOutlineScissors,
} from "react-icons/hi";
import { HiCheckBadge } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";



export default function VideoSection() {
  return (
    <div className="flex-1">
      
      <div className="w-full h-[600px] bg-black rounded-xl overflow-hidden">
        <img
          src="/flamingos.png"
          alt="Video"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="mt-4 text-xl font-semibold">
        Incredible Wild Animals in Dolby Vision HDR 4K 120 FPS Video - Scenic Wildlife
      </h1>

      
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-3">
          <img
           src="/4k-logo.jpg" 
            alt="4K Video Ultra HD"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
           <div className="flex items-center gap-1">
            <p className="font-semibold">4K Video ULTRA HD</p>
             <HiCheckBadge className="text-[16px] text-ytLightGray" />
         </div>
            <p className="text-sm text-ytLightGray">216K subscribers</p>
        </div>

        <button className="ml-4 border border-[#3a3a3a] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2a2a2a] transition">
        Join
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
        Subscribe
        </button>

        </div>

        <div className="flex items-center gap-2">

  
  <div className="flex items-center bg-ytGray rounded-full overflow-hidden">

    <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#3a3a3a] transition">
      <HiOutlineThumbUp className="text-xl" />
      <span className="text-sm font-medium">13K</span>
    </button>

    <div className="w-px h-6 bg-[#4a4a4a]" />

    <button className="flex items-center px-4 py-2 hover:bg-[#3a3a3a] transition">
      <HiOutlineThumbDown className="text-xl" />
    </button>
  </div>

  {/* SHARE */}
  <button className="flex items-center gap-2 bg-ytGray px-4 py-2 rounded-full hover:bg-[#3a3a3a] transition">
    <HiOutlineShare className="text-xl" />
    <span className="text-sm font-medium">Share</span>
  </button>

  {/* DOWNLOAD */}
  <button className="flex items-center gap-2 bg-ytGray px-4 py-2 rounded-full hover:bg-[#3a3a3a] transition">
    <HiOutlineDownload className="text-xl" />
    <span className="text-sm font-medium">Download</span>
  </button>

  {/* CLIP */}
  <button className="flex items-center gap-2 bg-ytGray px-4 py-2 rounded-full hover:bg-[#3a3a3a] transition">
    <HiOutlineScissors className="text-xl" />
    <span className="text-sm font-medium">Clip</span>
  </button>
  
  {/* THREE DOTS*/}
  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-ytGray hover:bg-[#3a3a3a] transition">
  <HiOutlineDotsHorizontal className="text-xl" />
</button>

</div>

      </div>

      {/* Description */}
      <div className="bg-ytGray mt-4 p-4 rounded-xl text-sm">
        <p className="font-semibold">7M views • 5 months ago</p>
        <p className="mt-2 text-ytLightGray">
          Incredible Wild Animals in Dolby Vision HDR 4K 120 FPS Video.
          Scenic wildlife featuring calm and relaxing background music.
        </p>
      </div>

      {/* Comments */}
      <div className="mt-6">
        <h2 className="font-semibold text-lg">434 Comments</h2>
      </div>
    </div>
  );
}
