import PropTypes from "prop-types";

const IconStatusRows = ({
  className = "",
  newEmployee,
  emptyStatusRow,
  emptyIconRow,
  hugeIconinterfaceoutlinew,
}) => {
  const iconRowColor =
    emptyIconRow === "True" ? "text-green-500" : "text-red-500";
  return (
    <div
      className={`flex-1 rounded-xl bg-text-primary-text flex flex-col items-start justify-start py-3.5 px-[19px] gap-[16px] text-left text-xs text-action-button-color font-montserrat border-[1px] border-solid border-whitesmoke ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="relative font-semibold inline-block min-w-[97px]">
          {newEmployee}
        </div>
        <div className="self-stretch relative text-13xl font-semibold text-dark-1-dark mq950:text-7xl mq450:text-lgi">
          {emptyStatusRow}
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[4px] text-right text-sm text-red">
        <div
          className={`relative font-medium ${iconRowColor} inline-block min-w-[32px]`}
        >
          {emptyIconRow}
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={hugeIconinterfaceoutlinew}
        />
      </div>
    </div>
  );
};

IconStatusRows.propTypes = {
  className: PropTypes.string,
  newEmployee: PropTypes.string,
  emptyStatusRow: PropTypes.string,
  emptyIconRow: PropTypes.string,
  hugeIconinterfaceoutlinew: PropTypes.string,
};

export default IconStatusRows;
