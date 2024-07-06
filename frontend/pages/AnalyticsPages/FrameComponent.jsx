import IconStatusRows from "./IconStatusRows.jsx";
import PropTypes from "prop-types";
import checkMarkCircle from "../../src/assets/check mark-circle.svg";
import warningCirlce from "../../src/assets/warning-polygon.svg";
// import { Style } from "@mui/icons-material";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-sm text-action-button-color font-montserrat ${className}`}
    >
      <nav className="m-0 w-[1086px] overflow-x-auto flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-xs text-action-button-color font-montserrat ">
        <IconStatusRows
          newEmployee="Network Traffic"
          emptyStatusRow="12"
          emptyIconRow="True"
          hugeIconinterfaceoutlinew={checkMarkCircle}
        />
        <IconStatusRows
          newEmployee="Forbidden words"
          emptyStatusRow="134"
          emptyIconRow="False"
          hugeIconinterfaceoutlinew={warningCirlce}
        />
        <IconStatusRows
          newEmployee="Keyboard Behavior"
          emptyStatusRow="18"
          emptyIconRow="True"
          hugeIconinterfaceoutlinew={checkMarkCircle}
        />
        <IconStatusRows
          newEmployee="Mouse Behavior"
          emptyStatusRow="208"
          emptyIconRow="False"
          hugeIconinterfaceoutlinew={warningCirlce}
        />
      </nav>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px] shrink-0"
        loading="lazy"
        alt=""
        src="/vector-1071.svg"
      />
      <div className="self-stretch rounded-lg bg-gray-100 flex flex-col items-start justify-start py-6 pr-5 pl-6 gap-[12px] opacity-[0.8] shrink-0">
        <b className="self-stretch relative tracking-[0.2px] capitalize">
          You Need to know
        </b>
        <div className="self-stretch relative tracking-[0.2px] leading-[22px] text-gray-300">
          <ul className="m-0 text-inherit pl-[19px]">
            <li>
              <b className="font-montserrat text-gray-600">{`True (Anomaly Detected) `}</b>
              <span className="font-semibold">
                This card will light up if an anomaly is detected, meaning the
                system has found something unusual and the security might be at
                risk.
              </span>
            </li>
          </ul>
        </div>
        <div className="self-stretch relative tracking-[0.2px] leading-[22px] text-dimgray">
          <ul className="m-0 text-inherit pl-[19px]">
            <li>
              <b className="font-montserrat text-gray-600">{`False (No Issue Detected) `}</b>
              <span className="font-semibold">
                This card will light up if everything is normal, meaning the
                system did not find any unusual activity and your security is
                good.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
