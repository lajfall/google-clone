import logo from "../assets/images/logo.svg";
import searchIcon from "../assets/images/search.svg";
import micIcon from "../assets/images/mic.svg";
import cameraIcon from "../assets/images/camera.svg";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-[219px] items-end">
        <img src={logo} alt="" />
      </div>
      <div className="h-40 p-7">
        <div className="hover:shadow-around relative rounded-full border border-[#DFE1E5] pl-12 pr-24">
          <div>
            <input
              className="h-[46px] w-[50vw] min-w-52 max-w-[444px] focus:outline-none"
              type="text"
            />
          </div>
          <img className="absolute left-4 top-3 w-5" src={searchIcon} alt="" />
          <img
            className="absolute right-14 top-3 w-5 hover:cursor-pointer"
            src={micIcon}
            alt=""
          />
          <img
            className="absolute right-5 top-3 w-5 hover:cursor-pointer"
            src={cameraIcon}
            alt=""
          />
        </div>
        <div className="mt-4 flex h-14 items-center justify-center gap-3">
          <button className="bg-button h-10 rounded px-4 outline-[#ddd] hover:outline">
            Google Search
          </button>
          <button className="bg-button h-10 rounded px-4 outline-[#ddd] hover:outline">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </div>
    </div>
  );
}
