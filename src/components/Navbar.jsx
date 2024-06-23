import avatar from "../assets/images/avatar.svg";
import labIcon from "../assets/images/lab.svg";
import gridIcon from "../assets/images/grid.svg";

export default function Navbar() {
  return (
    <nav className="flex h-[60px] items-center justify-between p-1.5">
      <div className="flex items-center gap-x-5 pl-5">
        <a className="hover:cursor-pointer hover:underline">About</a>
        <a className="hover:cursor-pointer hover:underline">Store</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 pr-1">
        <div className="flex items-center justify-center gap-x-4">
          <a className="hover:cursor-pointer hover:underline">Gmail</a>
          <a className="hover:cursor-pointer hover:underline">Images</a>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <a className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:cursor-pointer hover:bg-[#F0F1F1]">
            <img className="h-6 w-6" src={labIcon} alt="" />
          </a>
          <a className="flex h-10 w-10 items-center justify-center gap-x-4 rounded-full transition-colors duration-200 hover:cursor-pointer hover:bg-[#F0F1F1]">
            <img src={gridIcon} alt="" />
          </a>
          <a>
            <img
              className="h-10 w-10 hover:cursor-pointer"
              src={avatar}
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
