import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineMicrophone,
  HiOutlinePlus,
} from "react-icons/hi";


export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 h-16 bg-[#212121] sticky top-0 z-50">
      
     
      <div className="flex items-center gap-5">
        <HiOutlineMenu className="text-white text-2xl cursor-pointer" />

        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="/youtube-logo.svg"
            alt="YouTube"
            className="h-5"
          />
         <span className="text-[10px] text-gray-400 ml-1 relative -top-[12px] -left-[8px]">
        PH
        </span>

        </div>
      </div>

      {/* SEARCH */}
      <div className="flex items-center w-[40%] gap-3"> 
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#121212] border border-[#303030] px-4 py-2 rounded-l-full text-sm focus:outline-none"
          />
          <button className="bg-[#303030] px-5 py-2 rounded-r-full">
            <HiOutlineSearch className="text-white text-xl" />
          </button>
        </div>

       
        <button className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center">
          <HiOutlineMicrophone className="text-white text-xl" />
        </button>
      </div>

      
      <div className="flex items-center gap-4">
        
        <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#303030] text-white text-sm hover:bg-[#3a3a3a] transition">
         <HiOutlinePlus className="text-xl" />
         <span>Create</span>
        </button>


        <HiOutlineBell className="text-white text-2xl cursor-pointer" />

        
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
}
