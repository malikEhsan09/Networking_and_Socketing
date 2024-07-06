import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-5xl text-gray-700 font-montserrat mq700:flex-wrap ${className}`}
    >
      <div className="w-[220px] flex flex-col items-start justify-start gap-[4px]">
        <h2 className="m-0 relative text-inherit tracking-[0.2px] leading-[32px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
          Results Analytics
        </h2>
        <b className="self-stretch relative text-sm tracking-[0.2px] text-action-button-color">
          Analytics
        </b>
      </div>
      <div className="w-[285px] flex flex-row items-start justify-start gap-[24px] text-base text-dark-1-dark font-poppins">
        <div className="h-12 w-12 rounded-81xl bg-gray-200 flex flex-col items-center justify-center p-3 box-border"></div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[125px]">
              Huzaifa Ahmed
            </a>
            <div className="relative text-xs font-medium text-dark-3-dark whitespace-nowrap">
              huzaiufa123@gmail.com
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-12 w-12 relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
