import FrameComponent2 from "./FrameComponent2.jsx";
import FrameComponent1 from "./FrameComponent1.jsx";
import FrameComponent from "./FrameComponent.jsx";
import "../../src/index.css";
// import "../../src/App.css"

const Analytics = () => {
  return (
    <div className="w-full relative bg-background-dark-theme overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-6 box-border gap-[2px] leading-[normal] tracking-[normal] text-left text-sm text-text-secondary-text font-poppins">
      <div className="w-[226px] h-screen flex flex-col justify-between pt-[37px] pb-0 box-border overflow-y-auto">
        <div>
          <FrameComponent2 />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-2 gap-[24px]">
          <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-[13px] px-4 gap-[12px] hover:bg-gray-500 cursor-pointer">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="../../src/assets/Get Help.svg"
              />
              <div className="relative tracking-[0.2px] leading-[150%] font-medium inline-block min-w-[62px]">
                Get Help
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-[13px] px-4 gap-[12px] hover:bg-gray-500 cursor-pointer">
            <div className="flex flex-row items-center justify-start gap-[11px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="../../src/assets/Logout.svg"
              />
              <div className="relative tracking-[0.2px] leading-[150%] font-medium inline-block min-w-[50px]">
                Logout
              </div>
            </div>  
          </div>
        </div>
      </div>
      <main className="flex-1 bg-text-primary-text overflow-hidden flex flex-col items-start justify-start pt-12 px-10 pb-[492.9px] box-border gap-[39.5px] max-w-[calc(100%_-_250px)]">
        <img
          className="w-12 h-14 relative hidden"
          alt=""
          src="/circle-buttonshadow-copy.svg"
        />
        <FrameComponent1 />
        <hr className="self-stretch border-t border-gray-300" />
        <div className="flex overflow-x-auto">
          <FrameComponent />
        </div>
        <hr className="self-stretch border-t border-gray-300" />
      </main>
    </div>
  );
};

export default Analytics;
