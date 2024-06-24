import leafIcon from "../assets/images/leaf.svg";

export default function Footer() {
  return (
    <div className="bg-footer large:grid-cols-3 medium:grid-cols-2 absolute bottom-0 grid w-screen grid-cols-1 items-center justify-center p-1">
      <div className="medium:col-span-2 large:col-span-1 large:order-2 flex justify-center p-3 hover:cursor-pointer">
        <img className="w-5" src={leafIcon} alt="" />{" "}
        <a className="hover:underline" href="">
          Our third decade of climate action: join us
        </a>
      </div>
      <div className="large:order-1 large:justify-start flex justify-center p-3">
        <a className="px-[15px] hover:cursor-pointer hover:underline">
          Advertising
        </a>
        <a className="px-[15px] hover:cursor-pointer hover:underline">
          Business
        </a>
        <a className="px-[15px] hover:cursor-pointer hover:underline">
          How Search works
        </a>
      </div>
      <div className="large:order-3 large:justify-end flex justify-center p-3">
        <a className="px-[15px] hover:cursor-pointer hover:underline">
          Privacy
        </a>
        <a className="px-[15px] hover:cursor-pointer hover:underline">Terms</a>
        <a className="px-[15px] hover:cursor-pointer hover:underline">
          Settings
        </a>
      </div>
    </div>
  );
}
