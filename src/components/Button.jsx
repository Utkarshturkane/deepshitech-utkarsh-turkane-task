import classNames from "classnames";

function Button({ children, primary, secondary, ...rest }) {
  const classes = classNames(
    rest.className,
    "text-white text-center px-[20px] uppercase  text-[12px] banner-button h-[70px] rounded-[70px] flex justify-between items-center gap-10 hover:scale-[1.015] duration-300 ease-in-out",
    {
      "bg-[#C78C24]": primary,
      "bg-transparent": secondary,
    },
  );

  return (
    <button {...rest} className={classes}>
      {children && <span className="tracking-[2px]"> {children}</span>}
      <span className="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="mil-arrow"
          className={`rounded-[50%] w-[40px] h-[40px] p-[10px] ${secondary ? "bg-[#ffffff1a]" : "bg-black"} `}
        >
          <path
            style={{ fill: secondary ? "#fff" : "#C78C24" }}
            d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
          ></path>
        </svg>
      </span>
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary }) => {
    const count = Number(!!primary) + Number(!!secondary);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true",
      );
    }
  },
};

export default Button;
