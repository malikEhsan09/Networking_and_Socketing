import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[39.5px] text-center text-lg text-text-primary-text font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-[31px]">
        <b className="w-[165px] relative tracking-[0.2px] leading-[150%] inline-block">
          <p className="m-0">{`Continuous User `}</p>
          <p className="m-0">Authentication</p>
        </b>
      </div>
      {/* <img
        className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="vite.svg"
      /> */}
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-2 text-left text-sm font-poppins hover:cursor-pointer">
        <div className="flex-1 rounded-xl bg-gray-400 flex flex-row items-start justify-start py-[13px] px-4 gap-[12px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[19px] h-[19px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="../../src/assets/home-graph 01.svg"
            />
          </div>
          <div className="relative tracking-[0.2px] leading-[150%] font-medium inline-block min-w-[75px] hover:cursor-pointer ">
            Analytics
          </div>
          <div className="h-5 w-5 rounded-981xl bg-action-button-color hidden flex-col items-center justify-center py-2 px-1.5 box-border text-3xs">
            <div className="relative tracking-[0.4px] leading-[150%] font-medium">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
